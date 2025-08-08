"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepend = prepend;
/**
 * Append element or a couple to the beginning of the parent elements
 * @param parent - where to append
 * @param elements - element or elements list
 */
function prepend(parent, elements) {
    if (Array.isArray(elements)) {
        elements = elements.reverse();
        elements.forEach(function (el) { return parent.prepend(el); });
    }
    else {
        parent.prepend(elements);
    }
}
//# sourceMappingURL=prepend.js.map