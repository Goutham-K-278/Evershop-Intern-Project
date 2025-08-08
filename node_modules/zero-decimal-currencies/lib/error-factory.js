"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ZeroDecimalError(message) {
  this.name = 'ZeroDecimalError';
  this.message = message || 'An error ocurred, if cant solve, create and issue on https://github.com/KelvinCampelo/zero-decimal-currencies';
  this.stack = new Error().stack;
}

ZeroDecimalError.prototype = Object.create(ZeroDecimalError.prototype);
ZeroDecimalError.prototype.constructor = ZeroDecimalError;
var _default = ZeroDecimalError;
exports["default"] = _default;