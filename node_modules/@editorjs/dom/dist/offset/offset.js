"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.offset = offset;
/**
 * Return element's offset related to the document
 * @todo handle case when editor initialized in scrollable popup
 * @param el - element to compute offset
 */
function offset(el) {
    var rect = el.getBoundingClientRect();
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var top = rect.top + scrollTop;
    var left = rect.left + scrollLeft;
    return {
        top: top,
        left: left,
        bottom: top + rect.height,
        right: left + rect.width,
    };
}
//# sourceMappingURL=offset.js.map