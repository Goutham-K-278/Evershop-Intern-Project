"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isElement = isElement;
var helpers_1 = require("@editorjs/helpers");
/**
 * Check if object is DOM node
 * @param node - object to check
 * @returns true if node is Element, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isElement(node) {
    if ((0, helpers_1.isNumber)(node)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (Boolean(node)) && (Boolean(node.nodeType)) && node.nodeType === Node.ELEMENT_NODE;
}
//# sourceMappingURL=isElement.js.map