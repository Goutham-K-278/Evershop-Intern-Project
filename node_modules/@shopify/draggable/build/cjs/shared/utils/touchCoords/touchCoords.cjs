'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function touchCoords(event) {
  const {
    touches,
    changedTouches
  } = event;
  return touches && touches[0] || changedTouches && changedTouches[0];
}

exports.default = touchCoords;
