"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stat = stat;
exports.readFileSync = readFileSync;
const fsMock = jest.createMockFromModule("fs");
let mockStats = {};
let mockFiles = {};
function setMockStats(stats) {
    Object.entries(stats).forEach(([path, stats]) => {
        mockStats[path] = stats;
    });
}
function setMockFile(path, contents) {
    mockFiles[path] = contents;
}
function resetMockStats() {
    mockStats = {};
}
function resetMockFiles() {
    mockFiles = {};
}
function stat(path, cb) {
    const result = mockStats[path];
    if (result instanceof Error) {
        cb(result, undefined);
    }
    else {
        cb(undefined, result);
    }
}
function readFileSync(path) {
    if (!mockFiles[path]) {
        throw new Error("Non existent.");
    }
    return mockFiles[path];
}
fsMock.setMockStats = setMockStats;
fsMock.resetMockStats = resetMockStats;
fsMock.setMockFile = setMockFile;
fsMock.resetMockFiles = resetMockFiles;
fsMock.stat = stat;
fsMock.readFileSync = readFileSync;
exports.default = fsMock;
