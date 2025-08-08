"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingleTag = isSingleTag;
/**
 * Check if passed tag has no closed tag
 * @param tag - element to check
 * @returns boolean that represents if element is a single tag
 */
function isSingleTag(tag) {
    return [
        'AREA',
        'BASE',
        'BR',
        'COL',
        'COMMAND',
        'EMBED',
        'HR',
        'IMG',
        'INPUT',
        'KEYGEN',
        'LINK',
        'META',
        'PARAM',
        'SOURCE',
        'TRACK',
        'WBR',
    ].includes(tag.tagName);
}
//# sourceMappingURL=isSingleTag.js.map