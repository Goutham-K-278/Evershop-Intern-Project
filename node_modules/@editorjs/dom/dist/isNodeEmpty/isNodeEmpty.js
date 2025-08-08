"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNodeEmpty = isNodeEmpty;
var isLineBreakTag_1 = require("../isLineBreakTag");
var isElement_1 = require("../isElement");
var isNativeInput_1 = require("../isNativeInput");
var isSingleTag_1 = require("../isSingleTag");
/**
 * Checks node if it is empty
 * @description Method checks simple Node without any childs for emptiness
 * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
 * @param node - node to check
 * @param [ignoreChars] - char or substring to treat as empty
 * @returns true if it is empty
 */
function isNodeEmpty(node, ignoreChars) {
    var nodeText = '';
    if ((0, isSingleTag_1.isSingleTag)(node) && !(0, isLineBreakTag_1.isLineBreakTag)(node)) {
        return false;
    }
    if ((0, isElement_1.isElement)(node) && (0, isNativeInput_1.isNativeInput)(node)) {
        nodeText = node.value;
    }
    else {
        if (node.textContent !== null) {
            nodeText = node.textContent.replace('\u200B', '');
        }
    }
    if (ignoreChars !== undefined) {
        nodeText = nodeText.replace(new RegExp(ignoreChars, 'g'), '');
    }
    return nodeText.trim().length === 0;
}
//# sourceMappingURL=isNodeEmpty.js.map