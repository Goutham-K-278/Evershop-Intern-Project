"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContentLength = getContentLength;
var isNativeInput_1 = require("../isNativeInput");
/**
 * Return length of node`s text content
 * @param node - node with content, which length would be checked
 * @returns length of the content of the node
 */
function getContentLength(node) {
    var _a, _b;
    if ((0, isNativeInput_1.isNativeInput)(node)) {
        return node.value.length;
    }
    if (node.nodeType === Node.TEXT_NODE) {
        return node.length;
    }
    return (_b = (_a = node.textContent) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
}
//# sourceMappingURL=getContentLength.js.map