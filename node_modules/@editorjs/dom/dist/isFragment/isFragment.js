"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFragment = isFragment;
var helpers_1 = require("@editorjs/helpers");
/**
 * Check if object is DocumentFragment node
 * @param node - object to check
 * @returns true if node is DocumentFragment, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isFragment(node) {
    if ((0, helpers_1.isNumber)(node)) {
        return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return (Boolean(node)) && (Boolean(node.nodeType)) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
//# sourceMappingURL=isFragment.js.map