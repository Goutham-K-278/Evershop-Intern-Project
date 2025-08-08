"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const path_1 = __importDefault(require("path"));
const slash_1 = __importDefault(require("slash"));
const source_map_1 = require("source-map");
const sources_1 = require("./sources");
const util = __importStar(require("./util"));
async function default_1({ cliOptions, swcOptions, }) {
    async function concatResults(file, ...results) {
        let added = false;
        const map = new source_map_1.SourceMapGenerator({
            file,
            sourceRoot: swcOptions.sourceRoot,
        });
        let code = "";
        let offset = 0;
        for (const result of results) {
            code += result.code + "\n";
            if (result.map) {
                added = true;
                const consumer = await new source_map_1.SourceMapConsumer(result.map);
                const sources = new Set();
                consumer.eachMapping(mapping => {
                    sources.add(mapping.source);
                    map.addMapping({
                        generated: {
                            line: mapping.generatedLine + offset,
                            column: mapping.generatedColumn,
                        },
                        original: {
                            line: mapping.originalLine,
                            column: mapping.originalColumn,
                        },
                        source: mapping.source,
                        name: mapping.name,
                    });
                });
                sources.forEach(source => {
                    const content = consumer.sourceContentFor(source, true);
                    if (content !== null) {
                        map.setSourceContent(source, content);
                    }
                });
            }
            offset = code.split("\n").length - 1;
        }
        if (!added) {
            return { code };
        }
        return {
            code,
            map: JSON.stringify(map),
        };
    }
    async function output(results) {
        const file = cliOptions.sourceMapTarget ||
            path_1.default.basename(cliOptions.outFile || "stdout");
        const result = await concatResults(file, ...results);
        if (cliOptions.outFile) {
            util.outputFile(result, cliOptions.outFile, swcOptions.sourceMaps);
        }
        else {
            process.stdout.write(result.code + "\n");
            if (result.map) {
                const map = `//#sourceMappingURL=data:application/json;charset=utf-8;base64,${Buffer.from(JSON.stringify(result.map), "utf8").toString("base64")}`;
                process.stdout.write(map);
            }
        }
    }
    async function handle(filename) {
        const sourceFileName = (0, slash_1.default)(cliOptions.outFile
            ? path_1.default.relative(path_1.default.dirname(cliOptions.outFile), filename)
            : filename);
        return await util.compile(filename, {
            ...swcOptions,
            sourceFileName,
        }, cliOptions.sync, cliOptions.outFile);
    }
    async function getProgram(previousResults = new Map()) {
        const results = new Map();
        for (const filename of await (0, sources_1.globSources)(cliOptions.filenames, cliOptions.only, cliOptions.ignore, cliOptions.includeDotfiles)) {
            if ((0, sources_1.isCompilableExtension)(filename, cliOptions.extensions)) {
                results.set(filename, previousResults.get(filename));
            }
        }
        return results;
    }
    async function files() {
        let results = await getProgram();
        for (const filename of results.keys()) {
            try {
                const result = await handle(filename);
                if (result) {
                    results.set(filename, result);
                }
                else {
                    results.delete(filename);
                }
            }
            catch (err) {
                console.error(err.message);
                results.set(filename, err);
            }
        }
        if (cliOptions.watch) {
            const watcher = await (0, sources_1.watchSources)(cliOptions.filenames, cliOptions.includeDotfiles);
            watcher.on("ready", () => {
                Promise.resolve()
                    .then(async () => {
                    util.assertCompilationResult(results, cliOptions.quiet);
                    await output(results.values());
                    if (!cliOptions.quiet) {
                        console.info("Watching for file changes.");
                    }
                })
                    .catch(err => {
                    console.error(err.message);
                });
            });
            watcher.on("add", async (filename) => {
                if ((0, sources_1.isCompilableExtension)(filename, cliOptions.extensions)) {
                    // ensure consistent insertion order when files are added
                    results = await getProgram(results);
                }
            });
            watcher.on("unlink", filename => {
                results.delete(filename);
            });
            for (const type of ["add", "change"]) {
                watcher.on(type, filename => {
                    if (!(0, sources_1.isCompilableExtension)(filename, cliOptions.extensions)) {
                        return;
                    }
                    const start = process.hrtime();
                    handle(filename)
                        .then(async (result) => {
                        if (!result) {
                            results.delete(filename);
                            return;
                        }
                        results.set(filename, result);
                        util.assertCompilationResult(results, true);
                        await output(results.values());
                        if (!cliOptions.quiet) {
                            const [seconds, nanoseconds] = process.hrtime(start);
                            const ms = seconds * 1000 + nanoseconds * 1e-6;
                            const name = path_1.default.basename(cliOptions.outFile);
                            console.log(`Compiled ${name} in ${ms.toFixed(2)}ms`);
                        }
                    })
                        .catch(err => {
                        console.error(err.message);
                    });
                });
            }
        }
        else {
            util.assertCompilationResult(results, cliOptions.quiet);
            await output(results.values());
        }
    }
    async function stdin() {
        let code = "";
        process.stdin.setEncoding("utf8");
        for await (const chunk of process.stdin) {
            code += chunk;
        }
        const res = await util.transform(cliOptions.filename, code, {
            ...swcOptions,
            sourceFileName: "stdin",
        }, cliOptions.sync, undefined);
        output([res]);
    }
    if (cliOptions.filenames.length) {
        await files();
    }
    else {
        await stdin();
    }
}
