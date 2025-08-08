"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllInputs = findAllInputs;
var containsOnlyInlineElements_1 = require("../containsOnlyInlineElements");
var getDeepestBlockElements_1 = require("../getDeepestBlockElements");
var allInputsSelector_1 = require("../allInputsSelector");
var isNativeInput_1 = require("../isNativeInput");
/**
 * Find all contenteditable, textarea and editable input elements passed holder contains
 * @param holder - element where to find inputs
 * @returns - all inputs of the holder element
 */
function findAllInputs(holder) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    return Array.from(holder.querySelectorAll((0, allInputsSelector_1.allInputsSelector)()))
        /**
         * If contenteditable element contains block elements, treat them as inputs.
         */
        .reduce(function (result, input) {
        if ((0, isNativeInput_1.isNativeInput)(input) || (0, containsOnlyInlineElements_1.containsOnlyInlineElements)(input)) {
            return __spreadArray(__spreadArray([], result, true), [input], false);
        }
        return __spreadArray(__spreadArray([], result, true), (0, getDeepestBlockElements_1.getDeepestBlockElements)(input), true);
    }, []);
}
//# sourceMappingURL=findAllInputs.js.map