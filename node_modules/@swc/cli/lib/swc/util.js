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
exports.exists = exists;
exports.transform = transform;
exports.compile = compile;
exports.outputFile = outputFile;
exports.assertCompilationResult = assertCompilationResult;
exports.getDest = getDest;
exports.mapTsExt = mapTsExt;
exports.mapDtsExt = mapDtsExt;
const swc = __importStar(require("@swc/core"));
const slash_1 = __importDefault(require("slash"));
const fs_1 = require("fs");
const path_1 = require("path");
const process_1 = require("process");
async function exists(path) {
    let pathExists = true;
    try {
        await fs_1.promises.access(path);
    }
    catch (err) {
        pathExists = false;
    }
    return pathExists;
}
async function transform(filename, code, opts, sync, outputPath) {
    opts = {
        filename,
        ...opts,
    };
    if (outputPath) {
        opts.outputPath = outputPath;
    }
    if (sync) {
        return swc.transformSync(code, opts);
    }
    return swc.transform(code, opts);
}
async function compile(filename, opts, sync, outputPath) {
    opts = {
        ...opts,
    };
    if (outputPath) {
        opts.outputPath = outputPath;
    }
    try {
        const result = sync
            ? swc.transformFileSync(filename, opts)
            : await swc.transformFile(filename, opts);
        if (result.map) {
            // TODO: fix this in core
            // https://github.com/swc-project/swc/issues/1388
            const sourceMap = JSON.parse(result.map);
            if (opts.sourceFileName) {
                sourceMap["sources"][0] = opts.sourceFileName;
            }
            if (opts.sourceRoot) {
                sourceMap["sourceRoot"] = opts.sourceRoot;
            }
            result.map = JSON.stringify(sourceMap);
        }
        return result;
    }
    catch (err) {
        if (!err.message.includes("ignored by .swcrc")) {
            throw err;
        }
    }
}
function outputFile(output, filename, sourceMaps) {
    const destDir = (0, path_1.dirname)(filename);
    (0, fs_1.mkdirSync)(destDir, { recursive: true });
    let code = output.code;
    if (output.map && sourceMaps !== "inline") {
        // we've requested for a sourcemap to be written to disk
        const fileDirName = (0, path_1.dirname)(filename);
        const mapLoc = filename + ".map";
        code +=
            "\n//# sourceMappingURL=" + (0, slash_1.default)((0, path_1.relative)(fileDirName, mapLoc));
        (0, fs_1.writeFileSync)(mapLoc, output.map);
    }
    (0, fs_1.writeFileSync)(filename, code);
}
function assertCompilationResult(result, quiet = false) {
    let compiled = 0;
    let copied = 0;
    let failed = 0;
    for (const value of result.values()) {
        if (value instanceof Error) {
            failed++;
        }
        else if (value === "copied") {
            copied++;
        }
        else if (value) {
            compiled++;
        }
    }
    if (!quiet && compiled + copied > 0) {
        const copyResult = copied === 0 ? " " : ` (copied ${copied}) `;
        process_1.stderr.write(`Successfully compiled ${compiled} ${compiled !== 1 ? "files" : "file"}${copyResult}with swc.\n`);
    }
    if (failed > 0) {
        throw new Error(`Failed to compile ${failed} ${failed !== 1 ? "files" : "file"} with swc.`);
    }
}
function stripComponents(filename) {
    const components = filename.split("/").slice(1);
    if (!components.length) {
        return filename;
    }
    while (components[0] === "..") {
        components.shift();
    }
    return components.join("/");
}
const cwd = process.cwd();
function getDest(filename, outDir, stripLeadingPaths, ext) {
    let base = (0, slash_1.default)((0, path_1.relative)(cwd, filename));
    if (stripLeadingPaths) {
        base = stripComponents(base);
    }
    if (ext) {
        base = base.replace(/\.\w*$/, ext);
    }
    return (0, path_1.join)(outDir, base);
}
function mapTsExt(filename) {
    var _a;
    return ((_a = {
        ".ts": "js",
        ".mts": "mjs",
        ".cts": "cjs",
    }[(0, path_1.extname)(filename)]) !== null && _a !== void 0 ? _a : "js");
}
function mapDtsExt(filename) {
    var _a;
    return ((_a = {
        ".ts": "d.ts",
        ".mts": "d.mts",
        ".cts": "d.cts",
    }[(0, path_1.extname)(filename)]) !== null && _a !== void 0 ? _a : "d.ts");
}
