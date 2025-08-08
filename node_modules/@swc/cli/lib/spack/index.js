"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@swc/core");
const fs_1 = require("fs");
const path_1 = require("path");
const util_1 = require("util");
const options_1 = __importDefault(require("./options"));
const write = (0, util_1.promisify)(fs_1.writeFile);
const makeDir = (0, util_1.promisify)(fs_1.mkdir);
(async () => {
    const { spackOptions } = await (0, options_1.default)(process.argv);
    function isUserDefinedEntry(name) {
        if (typeof spackOptions.entry === "string") {
            return spackOptions.entry === name;
        }
        if (Array.isArray(spackOptions.entry)) {
            for (const e of spackOptions.entry) {
                if (e === name) {
                    return true;
                }
            }
            return false;
        }
        return name in spackOptions.entry;
    }
    async function build() {
        var _a;
        const bundleStart = process.hrtime();
        const output = await (0, core_1.bundle)(spackOptions);
        const bundleEnd = process.hrtime(bundleStart);
        console.info(`Bundling done: ${bundleEnd[0]}s ${bundleEnd[1] / 1000000}ms`);
        const emitStart = process.hrtime();
        if ((_a = spackOptions.output) === null || _a === void 0 ? void 0 : _a.path) {
            await Object.keys(output).map(async (name) => {
                let fullPath = "";
                if (isUserDefinedEntry(name)) {
                    fullPath = (0, path_1.join)(spackOptions.output.path, spackOptions.output.name.replace("[name]", name));
                }
                else {
                    const ext = (0, path_1.extname)(name);
                    const base = (0, path_1.basename)(name, ext);
                    const filename = (0, path_1.relative)(process.cwd(), name);
                    fullPath = (0, path_1.join)(spackOptions.output.path, (0, path_1.dirname)(filename), `${base}.js`);
                }
                await makeDir((0, path_1.dirname)(fullPath), { recursive: true });
                await write(fullPath, output[name].code, "utf-8");
                if (output[name].map) {
                    await write(`${fullPath}.map`, output[name].map, "utf-8");
                }
            });
        }
        else {
            throw new Error("Cannot print to stdout: not implemented yet");
        }
        const emitEnd = process.hrtime(emitStart);
        console.info(`Done: ${emitEnd[0]}s ${emitEnd[1] / 1000000}ms`);
    }
    // if (cliOptions.watch) {
    //     throw new Error('watch is not implemented yet')
    // }
    await build();
})();
