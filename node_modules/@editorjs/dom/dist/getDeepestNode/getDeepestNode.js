"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeepestNode = getDeepestNode;
var isNativeInput_1 = require("../isNativeInput");
var isLineBreakTag_1 = require("../isLineBreakTag");
var isSingleTag_1 = require("../isSingleTag");
/**
 * Search for deepest node which is Leaf.
 * Leaf is the vertex that doesn't have any child nodes
 * @description Method recursively goes throw the all Node until it finds the Leaf
 * @param node - root Node. From this vertex we start Deep-first search
 *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
 * @param [atLast] - find last text node
 * @returns - it can be text Node or Element Node, so that caret will able to work with it
 *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
 */
function getDeepestNode(node, atLast) {
    if (atLast === void 0) { atLast = false; }
    /**
     * Current function have two directions:
     * - starts from first child and every time gets first or nextSibling in special cases
     * - starts from last child and gets last or previousSibling
     */
    var child = atLast ? 'lastChild' : 'firstChild';
    var sibling = atLast ? 'previousSibling' : 'nextSibling';
    if (node.nodeType === Node.ELEMENT_NODE && node[child]) {
        var nodeChild = node[child];
        /**
         * special case when child is single tag that can't contain any content
         */
        if ((0, isSingleTag_1.isSingleTag)(nodeChild)
            && !(0, isNativeInput_1.isNativeInput)(nodeChild)
            && !(0, isLineBreakTag_1.isLineBreakTag)(nodeChild)) {
            /**
             * 1) We need to check the next sibling. If it is Node Element then continue searching for deepest
             * from sibling
             *
             * 2) If single tag's next sibling is null, then go back to parent and check his sibling
             * In case of Node Element continue searching
             *
             * 3) If none of conditions above happened return parent Node Element
             */
            if (nodeChild[sibling]) {
                nodeChild = nodeChild[sibling];
            }
            else if (nodeChild.parentNode !== null && nodeChild.parentNode[sibling]) {
                nodeChild = nodeChild.parentNode[sibling];
            }
            else {
                return nodeChild.parentNode;
            }
        }
        return getDeepestNode(nodeChild, atLast);
    }
    return node;
}
//# sourceMappingURL=getDeepestNode.js.map