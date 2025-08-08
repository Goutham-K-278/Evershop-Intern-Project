"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@swc/core");
const compile_1 = require("../compile");
jest.mock("@swc/core");
describe("compile", () => {
    it("compile with sync transform", async () => {
        const options = {};
        await (0, compile_1.compile)("test.ts", options, true, undefined);
        expect(core_1.transformFileSync).toHaveBeenCalledWith("test.ts", options);
    });
    it("compile with async transform", async () => {
        const options = {};
        await (0, compile_1.compile)("test.ts", options, false, undefined);
        expect(core_1.transformFile).toHaveBeenCalledWith("test.ts", options);
    });
});
