"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dir;
const fs_1 = require("fs");
const path_1 = require("path");
const piscina_1 = __importDefault(require("piscina"));
const process_1 = require("process");
const util_1 = require("util");
const util_2 = require("./util");
const dirWorker_1 = __importDefault(require("./dirWorker"));
const sources_1 = require("./sources");
const { mkdir, rmdir, rm, copyFile, unlink } = fs_1.promises;
const recursive = { recursive: true };
async function handleCopy(filename, outDir, stripLeadingPaths) {
    const dest = (0, util_2.getDest)(filename, outDir, stripLeadingPaths);
    const dir = (0, path_1.dirname)(dest);
    await mkdir(dir, recursive);
    await copyFile(filename, dest);
    return 0 /* CompileStatus.Copied */;
}
async function beforeStartCompilation(cliOptions) {
    const { outDir, deleteDirOnStart } = cliOptions;
    if (deleteDirOnStart) {
        const exists = await (0, fs_1.existsSync)(outDir);
        if (exists) {
            rm ? await rm(outDir, recursive) : await rmdir(outDir, recursive);
        }
    }
}
async function initialCompilation(cliOptions, swcOptions, callbacks) {
    const { includeDotfiles, filenames, copyFiles, extensions, outDir, outFileExtension, stripLeadingPaths, sync, quiet, watch, only, ignore, } = cliOptions;
    const results = new Map();
    const reasons = new Map();
    const start = process.hrtime();
    const sourceFiles = await (0, sources_1.globSources)(filenames, only, ignore, includeDotfiles);
    const [compilable, copyable] = (0, sources_1.splitCompilableAndCopyable)(sourceFiles, extensions, copyFiles);
    if (sync) {
        for (const filename of compilable) {
            try {
                const result = await (0, dirWorker_1.default)({
                    filename,
                    outDir,
                    sync,
                    cliOptions,
                    swcOptions,
                    outFileExtension,
                });
                results.set(filename, result);
            }
            catch (err) {
                if (!(callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFail)) {
                    console.error(err.message);
                }
                results.set(filename, 3 /* CompileStatus.Failed */);
            }
        }
        for (const filename of copyable) {
            try {
                const result = await handleCopy(filename, outDir, stripLeadingPaths);
                results.set(filename, result);
            }
            catch (err) {
                if (!(callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFail)) {
                    console.error(err.message);
                }
                results.set(filename, 3 /* CompileStatus.Failed */);
            }
        }
    }
    else {
        const workers = new piscina_1.default({
            filename: (0, path_1.resolve)(__dirname, "./dirWorker.js"),
            maxThreads: cliOptions.workers,
            concurrentTasksPerWorker: 2,
        });
        await Promise.all([
            Promise.allSettled(compilable.map(filename => workers
                .run({
                filename,
                outDir,
                sync,
                cliOptions,
                swcOptions,
                outFileExtension,
            })
                .catch(err => {
                if (!(callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFail)) {
                    console.error(err.message);
                }
                throw err;
            }))),
            Promise.allSettled(copyable.map(file => handleCopy(file, outDir, stripLeadingPaths))),
        ]).then(([compiled, copied]) => {
            compiled.forEach((result, index) => {
                const filename = compilable[index];
                if (result.status === "fulfilled") {
                    results.set(filename, result.value);
                }
                else {
                    results.set(filename, 3 /* CompileStatus.Failed */);
                    reasons.set(filename, result.reason.message);
                }
            });
            copied.forEach((result, index) => {
                const filename = copyable[index];
                if (result.status === "fulfilled") {
                    results.set(filename, result.value);
                }
                else {
                    results.set(filename, 3 /* CompileStatus.Failed */);
                }
            });
        });
    }
    const end = process.hrtime(start);
    let failed = 0;
    let compiled = 0;
    let copied = 0;
    for (let [_, status] of results) {
        switch (status) {
            case 1 /* CompileStatus.Compiled */:
                compiled += 1;
                break;
            case 3 /* CompileStatus.Failed */:
                failed += 1;
                break;
            case 0 /* CompileStatus.Copied */:
                copied += 1;
                break;
        }
    }
    const duration = end[1] / 1000000;
    if (compiled + copied) {
        let message = "";
        if (compiled) {
            message += `Successfully compiled: ${compiled} ${compiled > 1 ? "files" : "file"}`;
        }
        if (compiled && copied) {
            message += ", ";
        }
        if (copied) {
            message += `copied ${copied} ${copied > 1 ? "files" : "file"}`;
        }
        message += (0, util_1.format)(" with swc (%dms)\n", duration.toFixed(2));
        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onSuccess) {
            if (!failed) {
                callbacks.onSuccess({ duration, compiled, copied });
            }
        }
        else if (!quiet) {
            process_1.stderr.write(message);
        }
    }
    if (failed) {
        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFail) {
            callbacks.onFail({ duration, reasons });
        }
        else {
            console.error(`Failed to compile ${failed} ${failed !== 1 ? "files" : "file"} with swc.`);
            if (!watch) {
                const files = Array.from(results.entries())
                    .filter(([, status]) => status === 3 /* CompileStatus.Failed */)
                    .map(([filename, _]) => filename)
                    .join("\n");
                throw new Error(`Failed to compile:\n${files}`);
            }
        }
    }
}
async function watchCompilation(cliOptions, swcOptions, callbacks) {
    const { includeDotfiles, filenames, copyFiles, extensions, outDir, stripLeadingPaths, outFileExtension, quiet, sync, only, ignore, } = cliOptions;
    const watcher = await (0, sources_1.watchSources)(filenames, includeDotfiles, only, ignore);
    watcher.on("ready", () => {
        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onWatchReady) {
            callbacks.onWatchReady();
        }
        else if (!quiet) {
            console.info("Watching for file changes.");
        }
    });
    watcher.on("unlink", async (filename) => {
        try {
            if ((0, sources_1.isCompilableExtension)(filename, extensions)) {
                await unlink((0, util_2.getDest)(filename, outDir, stripLeadingPaths, `.${(0, util_2.mapTsExt)(filename)}`));
                const sourcemapPath = (0, util_2.getDest)(filename, outDir, stripLeadingPaths, `.${(0, util_2.mapTsExt)(filename)}.map`);
                const sourcemapExists = await (0, util_2.exists)(sourcemapPath);
                if (sourcemapExists) {
                    await unlink(sourcemapPath);
                }
            }
            else if (copyFiles) {
                await unlink((0, util_2.getDest)(filename, outDir, stripLeadingPaths));
            }
        }
        catch (err) {
            if (err.code !== "ENOENT") {
                console.error(err.stack);
            }
        }
    });
    for (const type of ["add", "change"]) {
        watcher.on(type, async (filename) => {
            if ((0, sources_1.isCompilableExtension)(filename, extensions)) {
                const start = process.hrtime();
                const getDuration = () => {
                    const end = process.hrtime(start);
                    const duration = end[1] / 1000000;
                    return duration;
                };
                try {
                    const result = await (0, dirWorker_1.default)({
                        filename,
                        outDir,
                        sync,
                        cliOptions,
                        swcOptions,
                        outFileExtension,
                    });
                    const duration = getDuration();
                    if (result === 1 /* CompileStatus.Compiled */) {
                        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onSuccess) {
                            callbacks.onSuccess({
                                duration,
                                compiled: 1,
                                filename,
                            });
                        }
                        else if (!quiet) {
                            process_1.stderr.write((0, util_1.format)(`Successfully compiled ${filename} with swc (%dms)\n`, duration.toFixed(2)));
                        }
                    }
                }
                catch (error) {
                    if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFail) {
                        const reasons = new Map();
                        reasons.set(filename, error.message);
                        callbacks.onFail({ duration: getDuration(), reasons });
                    }
                    else {
                        console.error(error.message);
                    }
                }
            }
            else if (copyFiles) {
                const start = process.hrtime();
                const getDuration = () => {
                    const end = process.hrtime(start);
                    const duration = end[1] / 1000000;
                    return duration;
                };
                try {
                    const result = await handleCopy(filename, outDir, stripLeadingPaths);
                    if (result === 0 /* CompileStatus.Copied */) {
                        const duration = getDuration();
                        if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onSuccess) {
                            callbacks.onSuccess({
                                duration,
                                copied: 1,
                                filename,
                            });
                        }
                        else if (!quiet) {
                            process_1.stderr.write((0, util_1.format)(`Successfully copied ${filename} with swc (%dms)\n`, duration.toFixed(2)));
                        }
                    }
                }
                catch (error) {
                    if (callbacks === null || callbacks === void 0 ? void 0 : callbacks.onFail) {
                        const reasons = new Map();
                        reasons.set(filename, error.message);
                        callbacks.onFail({ duration: getDuration(), reasons });
                    }
                    else {
                        console.error(`Failed to copy ${filename}`);
                        console.error(error.message);
                    }
                }
            }
        });
    }
}
async function dir({ cliOptions, swcOptions, callbacks, }) {
    const { watch } = cliOptions;
    await beforeStartCompilation(cliOptions);
    await initialCompilation(cliOptions, swcOptions, callbacks);
    if (watch) {
        await watchCompilation(cliOptions, swcOptions, callbacks);
    }
}
