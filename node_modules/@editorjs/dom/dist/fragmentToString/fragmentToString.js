"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fragmentToString = fragmentToString;
var make_1 = require("../make");
/**
 * Returns the HTML content of passed Document Fragment
 * @param fragment - document fragment to process
 * @returns the HTML content of passed Document Fragment
 */
function fragmentToString(fragment) {
    var div = (0, make_1.make)('div');
    div.appendChild(fragment);
    return div.innerHTML;
}
//# sourceMappingURL=fragmentToString.js.map