"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCollapsedWhitespaces = isCollapsedWhitespaces;
/**
 * Determine whether a passed text content is a collapsed whitespace.
 *
 * In HTML, whitespaces at the start and end of elements and outside elements are ignored.
 * There are two types of whitespaces in HTML:
 * - Visible (&nbsp;)
 * - Invisible (regular trailing spaces, tabs, etc)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace
 * @see https://www.w3.org/TR/css-text-3/#white-space-processing
 * @param textContent — any string, for ex a textContent of a node
 * @returns True if passed text content is whitespace which is collapsed (invisible) in browser
 */
function isCollapsedWhitespaces(textContent) {
    /**
     *  Throughout, whitespace is defined as one of the characters
     *  "\t" TAB \u0009
     *  "\n" LF  \u000A
     *  "\r" CR  \u000D
     *  " "  SPC \u0020
     */
    return !/[^\t\n\r ]/.test(textContent);
}
//# sourceMappingURL=isCollapsedWhitespaces.js.map