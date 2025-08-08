"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allInputsSelector = allInputsSelector;
/**
 * Returns CSS selector for all text inputs
 */
function allInputsSelector() {
    var allowedInputTypes = ['text', 'password', 'email', 'number', 'search', 'tel', 'url'];
    return '[contenteditable=true], textarea, input:not([type]), '
        + allowedInputTypes.map(function (type) { return "input[type=\"".concat(type, "\"]"); }).join(', ');
}
//# sourceMappingURL=allInputsSelector.js.map