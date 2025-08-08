#!/usr/bin/env node
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
const min_version_1 = __importDefault(require("semver/ranges/min-version"));
const fs_1 = require("fs");
const path = __importStar(require("path"));
const child_process_1 = require("child_process");
const { BinWrapper } = require("@xhmikosr/bin-wrapper");
const { platform, arch } = process;
const SWC_CLI_ENV = {
    // Allow to specify specific version of swc binary version to use
    SWCX_CORE_VERSION_OVERRIDE: "SWCX_CORE_VERSION_OVERRIDE",
    // Allow to skip check peer @swc/core version check
    SWCX_SKIP_CORE_VERSION_CHECK: "SWCX_SKIP_CORE_VERSION_CHECK",
};
/**
 * Determines version of the swc cli binary to use.
 *
 * By default, if cwd have a package.json already have dependency to @swc/core
 * will try to match those versions. Otherwise will use the latest
 * version available when @swc/cli is published.
 *
 * If `SWCX_CORE_VERSION_OVERRIDE` is set, both will be ignored and
 * explicitly will try to use the version specified. Note this won't ceck
 * validity of the version.
 */
const getCoreVersion = () => {
    const latestVersion = "1.3.24";
    if (process.env[SWC_CLI_ENV.SWCX_CORE_VERSION_OVERRIDE]) {
        console.log(`Using swc core version from ${SWC_CLI_ENV.SWCX_CORE_VERSION_OVERRIDE} env variable`);
        return `${process.env[SWC_CLI_ENV.SWCX_CORE_VERSION_OVERRIDE]}`;
    }
    try {
        if (!process.env[SWC_CLI_ENV.SWCX_SKIP_CORE_VERSION_CHECK]) {
            const cwdPackageManifestPath = path.resolve(process.cwd(), "package.json");
            if ((0, fs_1.existsSync)(cwdPackageManifestPath)) {
                const { dependencies, devDependencies, } = require(cwdPackageManifestPath);
                const swcCoreVersion = (dependencies === null || dependencies === void 0 ? void 0 : dependencies["@swc/core"]) ||
                    (devDependencies === null || devDependencies === void 0 ? void 0 : devDependencies["@swc/core"]);
                if (swcCoreVersion) {
                    return (0, min_version_1.default)(swcCoreVersion);
                }
            }
            else {
                return latestVersion;
            }
        }
        else {
            console.log(`Skipping swc core version check due to ${SWC_CLI_ENV.SWCX_SKIP_CORE_VERSION_CHECK} env variable`);
        }
    }
    catch (e) {
        console.warn(`Failed to determine swc core version from package.json, using latest available version ${latestVersion} instead`, e);
    }
    return latestVersion;
};
const isMusl = () => (() => {
    function isMusl() {
        if (!process.report ||
            typeof process.report.getReport !== "function") {
            try {
                return (0, fs_1.readFileSync)("/usr/bin/ldd", "utf8").includes("musl");
            }
            catch (e) {
                return true;
            }
        }
        else {
            const { glibcVersionRuntime } = process.report.getReport().header;
            return !glibcVersionRuntime;
        }
    }
    return isMusl();
})();
const getBinaryName = () => {
    const platformBinaryMap = {
        win32: {
            x64: "swc-win32-x64-msvc.exe",
            ia32: "swc-win32-ia32-msvc.exe",
            arm64: "swc-win32-arm64-msvc.exe",
        },
        darwin: {
            x64: "swc-darwin-x64",
            arm64: "swc-darwin-arm64",
        },
        linux: {
            x64: `swc-linux-x64-${isMusl() ? "musl" : "gnu"}`,
            arm64: `swc-linux-arm64-${isMusl() ? "musl" : "gnu"}`,
            arm: "swc-linux-arm64-gnu",
        },
    };
    const binaryName = platformBinaryMap[platform][arch];
    if (!binaryName) {
        throw new Error(`Unsupported platform: binary ${binaryName} for '${platform} ${arch}' is not available`);
    }
    return binaryName;
};
const executeBinary = async () => {
    const coreVersion = getCoreVersion();
    const releaseBase = `https://github.com/swc-project/swc/releases/download/v${coreVersion}`;
    const binaryName = getBinaryName();
    const bin = new BinWrapper({
        // do not explicitly run the binary to check existence to avoid
        // redundant spawn
        skipCheck: true,
    })
        .src(`${releaseBase}/${binaryName}`, platform, arch)
        .dest(`node_modules/.bin/swc-cli-${coreVersion}`)
        .use(binaryName);
    await bin.run();
    const binPath = bin.path;
    const [, , ...args] = process.argv;
    const options = { cwd: process.cwd(), stdio: "inherit" };
    return (0, child_process_1.spawn)(binPath, args, options);
};
executeBinary().catch(e => console.error(e));
