"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.canSetCaret = canSetCaret;
var isNativeInput_1 = require("../isNativeInput");
var isContentEditable_1 = require("../isContentEditable");
/**
 * Checks if we can set caret
 * @param target - target to check
 * @returns true if caret can be set in the target element, false otherwise
 */
function canSetCaret(target) {
    var result = true;
    if ((0, isNativeInput_1.isNativeInput)(target)) {
        switch (target.type) {
            case 'file':
            case 'checkbox':
            case 'radio':
            case 'hidden':
            case 'submit':
            case 'button':
            case 'image':
            case 'reset':
                result = false;
                break;
        }
    }
    else {
        result = (0, isContentEditable_1.isContentEditable)(target);
    }
    return result;
}
//# sourceMappingURL=canSetCaret.js.map