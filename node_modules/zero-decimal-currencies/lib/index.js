"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.display = void 0;

var _errorFactory = _interopRequireDefault(require("./error-factory"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ZERO_DECIMAL_CURRENCIES = ["BIF", "CLP", "DJF", "GNF", "JPY", "KMF", "KRW", "MGA", "PYG", "RWF", "UGX", "VND", "VUV", "XAF", "XOF", "XPF"];

function toFixedNoRound(num, fixed) {
  var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
  return num.toString().match(re)[0];
}

function toFixedRound(num, fixed, precision) {
  var big = num * Math.pow(10, precision);
  var bigNoRound = Number(toFixedNoRound(big, fixed).toString());
  var noRound = Number(toFixedNoRound(num, fixed).toString());
  var digits = bigNoRound.toString().length - noRound.toString().length;
  return (noRound + (bigNoRound % noRound >= Math.pow(10, digits) / 2)).toString();
}

var display = function display(amount, currency) {
  try {
    //test if number can be converted to float
    if (!isNaN(amount) && amount) {
      amount = parseFloat(amount.toString());
    } else {
      throw new _errorFactory["default"]("The amount cannot be parsed to Float");
    } //test if amount is number


    if (!!!(Number(amount) === amount)) {
      throw new _errorFactory["default"]("The amount cannot be parsed to Float");
    }

    if (ZERO_DECIMAL_CURRENCIES.includes(currency.toString().toUpperCase())) {
      //exclude all decimals
      return amount.toFixed(0);
    } else {
      return (amount / 100).toFixed(2);
    }
  } catch (error) {
    console.log(error);
    throw new _errorFactory["default"]();
  }
};

exports.display = display;

function _default(amount, currency, display, noRound) {
  try {
    if (!amount) {
      throw new _errorFactory["default"]("The amount value is required");
    }

    if (!currency) {
      throw new _errorFactory["default"]("The currency value is required");
    } //test if number can be converted to float


    if (!isNaN(amount) && amount) {
      amount = parseFloat(amount.toString());
    } else {
      throw new _errorFactory["default"]("The amount cannot be parsed to Float");
    } //test if amount is number


    if (!!!(Number(amount) === amount)) {
      throw new _errorFactory["default"]("The amount cannot be parsed to Float");
    }

    if (ZERO_DECIMAL_CURRENCIES.includes(currency.toString().toUpperCase())) {
      //exclude all decimals
      return noRound ? toFixedNoRound(amount, 0) : toFixedRound(amount, 0, 2);
    } else {
      if (noRound) {
        return display ? toFixedNoRound(amount, 2).toString() : toFixedNoRound(amount, 2).toString().replace(".", "");
      } else {
        var amountFixed = amount;

        if (amount < 0.01) {
          return display ? "0.00" : "0";
        }

        amountFixed = amount.toFixed(2);
        return display ? amountFixed : amountFixed.toString().replace(".", "");
      }
    }
  } catch (error) {
    console.log(error);
    throw new _errorFactory["default"]();
  }
}