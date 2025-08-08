"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const util_1 = require("../util");
describe("getDest", () => {
    it("does not modify the filename by default", () => {
        expect((0, util_1.getDest)((0, path_1.join)(process.cwd(), "src/path/name.ts"), "foo/bar", false)).toEqual((0, path_1.join)("foo", "bar", "src", "path", "name.ts"));
    });
    it("when stripLeadingPaths is true, it removes leading paths", () => {
        expect((0, util_1.getDest)((0, path_1.join)(process.cwd(), "src/path/name.ts"), "foo/bar", true)).toEqual((0, path_1.join)("foo", "bar", "path", "name.ts"));
    });
    it("when stripLeadingPaths is true, it also resolves relative paths", () => {
        expect((0, util_1.getDest)((0, path_1.join)(process.cwd(), "../../path/name.ts"), "foo/bar", true)).toEqual((0, path_1.join)("foo", "bar", "path", "name.ts"));
    });
});
