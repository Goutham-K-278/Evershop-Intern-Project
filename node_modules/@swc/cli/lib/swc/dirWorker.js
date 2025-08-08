"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handleCompile;
const slash_1 = __importDefault(require("slash"));
const path_1 = require("path");
const util_1 = require("./util");
const compile_1 = require("./compile");
async function handleCompile(opts) {
    var _a;
    const dest = (0, util_1.getDest)(opts.filename, opts.outDir, opts.cliOptions.stripLeadingPaths, `.${(_a = opts.outFileExtension) !== null && _a !== void 0 ? _a : (0, util_1.mapTsExt)(opts.filename)}`);
    const sourceFileName = (0, slash_1.default)((0, path_1.relative)((0, path_1.dirname)(dest), opts.filename));
    const options = { ...opts.swcOptions, sourceFileName };
    const result = await (0, util_1.compile)(opts.filename, options, opts.sync, dest);
    if (result) {
        const destDts = (0, util_1.getDest)(opts.filename, opts.outDir, opts.cliOptions.stripLeadingPaths, `.${(0, util_1.mapDtsExt)(opts.filename)}`);
        const destSourcemap = dest + ".map";
        await (0, compile_1.outputResult)({
            output: result,
            sourceFile: opts.filename,
            destFile: dest,
            destDtsFile: destDts,
            destSourcemapFile: destSourcemap,
            options,
        });
        return 1 /* CompileStatus.Compiled */;
    }
    else {
        return 2 /* CompileStatus.Omitted */;
    }
}
