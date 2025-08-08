"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHTMLString = isHTMLString;
var make_1 = require("../make");
/**
 * Check if string contains html elements
 * @param str - string to check
 * @returns true if str is an html string, false otherwise
 */
function isHTMLString(str) {
    var wrapper = (0, make_1.make)('div');
    wrapper.innerHTML = str;
    return wrapper.childElementCount > 0;
}
//# sourceMappingURL=isHtmlString.js.map