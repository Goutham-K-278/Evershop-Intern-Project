"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.outputResult = outputResult;
exports.compile = compile;
const slash_1 = __importDefault(require("slash"));
const fs_1 = require("fs");
const path_1 = require("path");
const core_1 = require("@swc/core");
const { mkdir, stat, writeFile } = fs_1.promises;
function withSourceMap(output, options, sourceMapFile, destDir) {
    let dts;
    // TODO: Remove once fixed in core
    if (output.output) {
        const json = JSON.parse(output.output);
        if (json.__swc_isolated_declarations__) {
            dts = json.__swc_isolated_declarations__;
        }
    }
    if (!output.map || options.sourceMaps === "inline") {
        return {
            sourceCode: output.code,
            dts,
        };
    }
    // TODO: remove once fixed in core https://github.com/swc-project/swc/issues/1388
    const sourceMap = JSON.parse(output.map);
    if (options.sourceFileName) {
        sourceMap["sources"][0] = options.sourceFileName;
    }
    if (options.sourceRoot) {
        sourceMap["sourceRoot"] = options.sourceRoot;
    }
    output.map = JSON.stringify(sourceMap);
    output.code += `\n//# sourceMappingURL=${(0, slash_1.default)((0, path_1.relative)(destDir, sourceMapFile))}`;
    return {
        sourceMap: output.map,
        sourceCode: output.code,
        dts,
    };
}
async function outputResult({ output, sourceFile, destFile, destDtsFile, destSourcemapFile, options, }) {
    const destDir = (0, path_1.dirname)(destFile);
    const { sourceMap, sourceCode, dts } = withSourceMap(output, options, destSourcemapFile, destDir);
    await mkdir(destDir, { recursive: true });
    const { mode } = await stat(sourceFile);
    const dtsPromise = dts
        ? writeFile(destDtsFile, dts, { mode })
        : Promise.resolve();
    const sourceMapPromise = sourceMap
        ? writeFile(destSourcemapFile, sourceMap, { mode })
        : Promise.resolve();
    await Promise.all([
        writeFile(destFile, sourceCode, { mode }),
        dtsPromise,
        sourceMapPromise,
    ]);
}
async function compile(filename, opts, sync, outputPath) {
    const options = { ...opts };
    if (outputPath) {
        options.outputPath = outputPath;
    }
    try {
        const result = sync
            ? (0, core_1.transformFileSync)(filename, options)
            : await (0, core_1.transformFile)(filename, options);
        return result;
    }
    catch (err) {
        if (!err.message.includes("ignored by .swcrc")) {
            throw err;
        }
    }
}
