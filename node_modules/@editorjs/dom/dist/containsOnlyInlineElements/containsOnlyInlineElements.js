"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.containsOnlyInlineElements = containsOnlyInlineElements;
var helpers_1 = require("@editorjs/helpers");
var blockElements_1 = require("../blockElements");
/**
 * Check if passed content includes only inline elements
 * @param data - element or html string
 * @returns true if data contains only inline elements, false otherwise
 */
function containsOnlyInlineElements(data) {
    var wrapper;
    if ((0, helpers_1.isString)(data)) {
        wrapper = document.createElement('div');
        wrapper.innerHTML = data;
    }
    else {
        wrapper = data;
    }
    var check = function (element) {
        return !(0, blockElements_1.blockElements)().includes(element.tagName.toLowerCase())
            && Array.from(element.children).every(check);
    };
    return Array.from(wrapper.children).every(check);
}
//# sourceMappingURL=containsOnlyInlineElements.js.map