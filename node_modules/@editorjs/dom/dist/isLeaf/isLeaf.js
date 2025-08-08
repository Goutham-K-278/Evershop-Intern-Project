"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeaf = isLeaf;
/**
 * checks node if it is doesn't have any child nodes
 * @param node - node to check
 * @returns true if node is leaf of the node tree, false otherwise
 */
function isLeaf(node) {
    if (node === null) {
        return false;
    }
    return node.childNodes.length === 0;
}
//# sourceMappingURL=isLeaf.js.map