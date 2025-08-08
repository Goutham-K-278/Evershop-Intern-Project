"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isContentEditable = isContentEditable;
/**
 * Check if passed element is contenteditable
 * @param element - html element to check
 * @returns true if element is contentEditable, false otherwise
 */
function isContentEditable(element) {
    return element.contentEditable === 'true';
}
//# sourceMappingURL=isContentEditable.js.map