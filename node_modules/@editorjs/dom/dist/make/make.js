"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make = make;
/**
 * Helper for making Elements with class name and attributes
 * @param tagName - new Element tag name
 * @param classNames - list or name of CSS class name(s)
 * @param attributes - any attributes
 * @returns created HTMLElement
 */
function make(tagName, classNames, attributes) {
    var _a;
    if (classNames === void 0) { classNames = null; }
    if (attributes === void 0) { attributes = {}; }
    var el = document.createElement(tagName);
    if (Array.isArray(classNames)) {
        var validClassnames = classNames.filter(function (className) { return className !== undefined; });
        (_a = el.classList).add.apply(_a, validClassnames);
    }
    else if (classNames !== null) {
        el.classList.add(classNames);
    }
    for (var attrName in attributes) {
        if (Boolean(Object.prototype.hasOwnProperty.call(attributes, attrName))) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            el[attrName] = attributes[attrName];
        }
    }
    return el;
}
//# sourceMappingURL=make.js.map