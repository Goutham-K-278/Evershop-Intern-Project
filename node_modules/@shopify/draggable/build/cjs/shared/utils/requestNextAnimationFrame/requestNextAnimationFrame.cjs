'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function requestNextAnimationFrame(callback) {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
}

exports.default = requestNextAnimationFrame;
