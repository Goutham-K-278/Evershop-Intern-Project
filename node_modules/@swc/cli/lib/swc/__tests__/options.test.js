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
const deepmerge_1 = __importDefault(require("deepmerge"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
jest.mock("fs");
const options_1 = __importStar(require("../options"));
const createDefaultResult = () => ({
    cliOptions: {
        copyFiles: false,
        deleteDirOnStart: false,
        extensions: [
            ".js",
            ".jsx",
            ".es6",
            ".es",
            ".mjs",
            ".ts",
            ".tsx",
            ".cts",
            ".mts",
        ],
        // @ts-expect-error
        filename: undefined,
        filenames: ["src"],
        ignore: [],
        includeDotfiles: false,
        only: [],
        // @ts-expect-error
        outDir: undefined,
        // @ts-expect-error
        outFile: undefined,
        outFileExtension: undefined,
        quiet: false,
        sourceMapTarget: undefined,
        stripLeadingPaths: false,
        sync: false,
        watch: false,
    },
    swcOptions: {
        configFile: undefined,
        jsc: { parser: undefined, transform: {} },
        sourceFileName: undefined,
        sourceMaps: undefined,
        sourceRoot: undefined,
        swcrc: true,
    },
});
describe("parserArgs", () => {
    let defaultResult;
    beforeEach(() => {
        defaultResult = createDefaultResult();
        (0, options_1.initProgram)();
        fs_1.default.resetMockFiles();
    });
    it("minimal args returns default result", async () => {
        const args = [
            "node",
            "/path/to/node_modules/swc-cli/bin/swc.js",
            "src",
        ];
        const result = await (0, options_1.default)(args);
        expect(result).toEqual(defaultResult);
    });
    describe("--out-file-extension", () => {
        it("provides the extension in the parsed args", () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "--out-file-extension",
                "magic_custom_extension",
            ];
            const result = (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult, {
                cliOptions: { outFileExtension: "magic_custom_extension" },
            });
            expect(result).toEqual(expectedOptions);
        });
    });
    describe("errors", () => {
        let mockExit;
        let mockConsoleError;
        beforeAll(() => {
            //@ts-expect-error
            mockExit = jest.spyOn(process, "exit").mockImplementation(() => { });
            mockConsoleError = jest
                .spyOn(console, "error")
                .mockImplementation(() => { });
        });
        beforeEach(() => {
            mockExit.mockClear();
            mockConsoleError.mockClear();
        });
        afterAll(() => {
            mockExit.mockRestore();
            mockConsoleError.mockRestore();
        });
        it("exits without filenames", async () => {
            const args = ["node", "/path/to/node_modules/swc-cli/bin/swc.js"];
            await (0, options_1.default)(args);
            expect(mockExit).toHaveBeenCalledWith(2);
            expect(mockConsoleError).toHaveBeenCalledTimes(2);
        });
        it("--watch exits without --out-dir", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "--watch",
            ];
            await (0, options_1.default)(args);
            expect(mockExit).toHaveBeenCalledWith(2);
            expect(mockConsoleError).toHaveBeenCalledTimes(2);
        });
        it("--watch exits without filenames", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--watch",
                "--out-dir",
                "esm",
            ];
            await (0, options_1.default)(args);
            expect(mockExit).toHaveBeenCalledWith(2);
            expect(mockConsoleError).toHaveBeenCalledTimes(3);
        });
        it("--out-dir exits with conflicting -out-file", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "--out-file",
                "esm/index.js",
                "--out-dir",
                "esm",
            ];
            await (0, options_1.default)(args);
            expect(mockExit).toHaveBeenCalledWith(2);
            expect(mockConsoleError).toHaveBeenCalledTimes(2);
        });
        it("--workers exits on non-numeric values", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--workers",
                "not-a-number",
                "src",
            ];
            await (0, options_1.default)(args);
            expect(mockExit).toHaveBeenCalledWith(2);
            expect(mockConsoleError).toHaveBeenCalledTimes(2);
        });
        it("--workers exits on non-integer values", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--workers",
                "1.5",
                "src",
            ];
            await (0, options_1.default)(args);
            expect(mockExit).toHaveBeenCalledWith(2);
            expect(mockConsoleError).toHaveBeenCalledTimes(2);
        });
    });
    describe("--source-maps", () => {
        it("source maps is ambiguous", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "--source-maps",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult, {
                swcOptions: { sourceMaps: true },
            });
            expect(result).toEqual(expectedOptions);
        });
        it("source maps true", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--source-maps",
                "true",
                "src",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult, {
                swcOptions: { sourceMaps: true },
            });
            expect(result).toEqual(expectedOptions);
        });
        it("source maps inline", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "-s",
                "inline",
                "src",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult, {
                swcOptions: { sourceMaps: "inline" },
            });
            expect(result).toEqual(expectedOptions);
        });
    });
    describe("--config", () => {
        it("throws with no config", async () => {
            let mockConsoleError;
            mockConsoleError = jest
                .spyOn(process.stderr, "write")
                .mockImplementation(() => {
                return true;
            });
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "-C",
            ];
            expect(() => (0, options_1.default)(args)).toThrow();
            mockConsoleError.mockRestore();
        });
        it("react development", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--config",
                "jsc.transform.react.development=true",
                "src",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult.swcOptions, {
                jsc: { transform: { react: { development: true } } },
            });
            expect(result.swcOptions).toEqual(expectedOptions);
        });
        it("react development and commonjs (two config options)", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--config",
                "jsc.transform.react.development=true",
                "-C",
                "module.type=commonjs",
                "src",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult.swcOptions, {
                jsc: { transform: { react: { development: true } } },
                module: { type: "commonjs" },
            });
            expect(result.swcOptions).toEqual(expectedOptions);
        });
        it("react development and commonjs (comma-separated)", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--config",
                "jsc.transform.react.development=true,module.type=commonjs",
                "src",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult.swcOptions, {
                jsc: { transform: { react: { development: true } } },
                module: { type: "commonjs" },
            });
            expect(result.swcOptions).toEqual(expectedOptions);
        });
        it("no equals sign", async () => {
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "--config",
                "no_equals",
                "src",
            ];
            const result = await (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult.swcOptions, {
                no_equals: true,
            });
            expect(result.swcOptions).toEqual(expectedOptions);
        });
    });
    describe("--cli-config-file", () => {
        it("reads a JSON config file with both camel and kebab case options", async () => {
            fs_1.default.setMockFile((0, path_1.resolve)(process.cwd(), "/swc/cli.json"), JSON.stringify({
                outFileExtension: "mjs",
                deleteDirOnStart: "invalid",
                "delete-dir-on-start": true,
            }));
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "--cli-config-file",
                "/swc/cli.json",
            ];
            const result = (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult, {
                cliOptions: { outFileExtension: "mjs", deleteDirOnStart: true },
            });
            expect(result).toEqual(expectedOptions);
        });
        it("reads a JSON but options are overriden from CLI", async () => {
            fs_1.default.setMockFile((0, path_1.resolve)(process.cwd(), "/swc/cli.json"), JSON.stringify({
                outFileExtension: "mjs",
                "delete-dir-on-start": true,
            }));
            const args = [
                "node",
                "/path/to/node_modules/swc-cli/bin/swc.js",
                "src",
                "--cli-config-file",
                "/swc/cli.json",
                "--out-file-extension",
                "cjs",
            ];
            const result = (0, options_1.default)(args);
            const expectedOptions = (0, deepmerge_1.default)(defaultResult, {
                cliOptions: { outFileExtension: "cjs", deleteDirOnStart: true },
            });
            expect(result).toEqual(expectedOptions);
        });
        describe("exits", () => {
            let mockExit;
            let mockConsoleError;
            beforeEach(() => {
                mockExit = jest
                    .spyOn(process, "exit")
                    // @ts-expect-error
                    .mockImplementation(() => { });
                mockConsoleError = jest
                    .spyOn(console, "error")
                    .mockImplementation(() => { });
            });
            afterEach(() => {
                mockExit.mockRestore();
                mockConsoleError.mockRestore();
            });
            it("if the config file is missing", async () => {
                const args = [
                    "node",
                    "/path/to/node_modules/swc-cli/bin/swc.js",
                    "src",
                    "--cli-config-file",
                    "/swc/cli.json",
                ];
                (0, options_1.default)(args);
                expect(mockExit).toHaveBeenCalledWith(2);
                expect(mockConsoleError).toHaveBeenCalledTimes(2);
            });
            it("if the config file is not valid JSON", async () => {
                fs_1.default.setMockFile("/swc/cli.json", "INVALID");
                const args = [
                    "node",
                    "/path/to/node_modules/swc-cli/bin/swc.js",
                    "src",
                    "--cli-config-file",
                    "/swc/cli.json",
                ];
                (0, options_1.default)(args);
                expect(mockExit).toHaveBeenCalledWith(2);
                expect(mockConsoleError).toHaveBeenCalledTimes(2);
            });
        });
    });
});
