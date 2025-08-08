"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = isEmpty;
var isLeaf_1 = require("../isLeaf");
var isNodeEmpty_1 = require("../isNodeEmpty");
/**
 * breadth-first search (BFS)
 * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
 * @description Pushes to stack all DOM leafs and checks for emptiness
 * @param node - node to check
 * @param [ignoreChars] - char or substring to treat as empty
 * @returns true if node is empty (considering ignore chars), false otherwise
 */
function isEmpty(node, ignoreChars) {
    /**
     * Normalize node to merge several text nodes to one to reduce tree walker iterations
     */
    node.normalize();
    var treeWalker = [node];
    while (treeWalker.length > 0) {
        var newNode = treeWalker.shift();
        if (!newNode) {
            continue;
        }
        node = newNode;
        if ((0, isLeaf_1.isLeaf)(node) && !(0, isNodeEmpty_1.isNodeEmpty)(node, ignoreChars)) {
            return false;
        }
        treeWalker.push.apply(treeWalker, Array.from(node.childNodes));
    }
    return true;
}
//# sourceMappingURL=isEmpty.js.map