"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLineBreakTag = isLineBreakTag;
/**
 * Check if element is BR or WBR
 * @param element - element to check
 * @returns boolean that represents if element is a line break tag
 */
function isLineBreakTag(element) {
    return [
        'BR',
        'WBR',
    ].includes(element.tagName);
}
//# sourceMappingURL=isLineBreakTag.js.map