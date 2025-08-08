'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

exports.default = distance;
