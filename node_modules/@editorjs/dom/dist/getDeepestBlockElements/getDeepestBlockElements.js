"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepestBlockElements = getDeepestBlockElements;
var containsOnlyInlineElements_1 = require("../containsOnlyInlineElements");
/**
 * Find and return all block elements in the passed parent (including subtree)
 * @param parent - root element
 * @returns deeperst block elements
 */
function getDeepestBlockElements(parent) {
    if ((0, containsOnlyInlineElements_1.containsOnlyInlineElements)(parent)) {
        return [parent];
    }
    return Array.from(parent.children).reduce(function (result, element) {
        return __spreadArray(__spreadArray([], result, true), getDeepestBlockElements(element), true);
    }, []);
}
//# sourceMappingURL=getDeepestBlockElements.js.map