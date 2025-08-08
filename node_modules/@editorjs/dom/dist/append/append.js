"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = append;
/**
 * Append one or several elements to the parent
 * @param parent - where to append
 * @param elements - element or elements list
 */
function append(parent, elements) {
    if (Array.isArray(elements)) {
        elements.forEach(function (el) {
            parent.appendChild(el);
        });
    }
    else {
        parent.appendChild(elements);
    }
}
//# sourceMappingURL=append.js.map