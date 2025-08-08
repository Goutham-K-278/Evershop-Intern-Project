"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNativeInput = isNativeInput;
/**
 * Checks target if it is native input
 * @param target - HTML element or string
 * @returns true if target is an input element, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isNativeInput(target) {
    var nativeInputs = [
        'INPUT',
        'TEXTAREA',
    ];
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
    return target && target.tagName ? nativeInputs.includes(target.tagName) : false;
}
//# sourceMappingURL=isNativeInput.js.map