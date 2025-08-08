<big><h1 align="center">zero-decimal-currencies</h1></big>

<p align="center">
  <a href="https://npmjs.org/package/zero-decimal-currencies">
    <img src="https://img.shields.io/npm/v/zero-decimal-currencies.svg" alt="NPM Version">
  </a>

  <a href="http://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/npm/l/zero-decimal-currencies.svg" alt="License">
  </a>

  <a href="https://github.com/KelvinCampelo/zero-decimal-currencies/issues">
    <img src="https://img.shields.io/github/issues/KelvinCampelo/zero-decimal-currencies.svg" alt="Github Issues">
  </a>

  <a href="https://travis-ci.org/KelvinCampelo/zero-decimal-currencies">
    <img src="https://img.shields.io/travis/KelvinCampelo/zero-decimal-currencies.svg" alt="Travis Status">
  </a>

  <a href="https://coveralls.io/github/KelvinCampelo/zero-decimal-currencies">
    <img src="https://img.shields.io/coveralls/KelvinCampelo/zero-decimal-currencies.svg" alt="Coveralls">
  </a>

  <a href="http://commitizen.github.io/cz-cli/">
    <img src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg" alt="Commitizen Friendly">
  </a>
  
</p>

<p align="center"><big>
Get the smallest currency unit even it is a Zero Decimal Currency
</big></p>

## Features

Get the smallest currency unit even it is a Zero Decimal Currency

This lib will convert the amount to the smallest currency unit (e.g., 100 cents to charge €1.00 or 100 to charge ¥100, a zero-decimal currency).

## Install

```sh
npm install zero-decimal-currencies
```

## Usage

```javascript
const smallestUnit = require("zero-decimal-currencies");
//or import smallUnit from 'zero-decimal-currencies';

//smallestUnit(amount, currency, display, noRound);

let amount = smallestUnit(100.01, "JPY"); //you don't want to display ¥100.01 to your customer, neither charge 100 times the correct amount
console.log(amount); //'100'

let amount2 = smallestUnit(100.01, "JPY", true); //even display mode set to true, will be nice to zero-decimal currencies
console.log(amount2); //'100'

let amount3 = smallestUnit(100.51, "JPY"); //by default will round up with zero-decimal currencies
console.log(amount3); //'101'

let amount4 = smallestUnit(100.01, "EUR"); //non zero-decimal currency, not useful to display, but useful to charge in Stripe
console.log(amount4); //'10001'

let amount5 = smallestUnit(100.01, "EUR", true); //non zero-decimal currency, useful to display, but not useful to charge in Stripe
console.log(amount5); //'100.01'

let amount6 = smallestUnit(15.7784514, "EUR"); //round is default, using toFixed rules
console.log(amount6); //'1578'

let amount7 = smallestUnit(15.7784514, "EUR", false, true); //the last parameter is a noRound option, that always get the 2 first decimals even a big decimal (that js put in cientific notation)
console.log(amount7); //'1578'
```

| Params              | Description                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| amount (required)   | Value that will be converted into the smallest currency unit                                                                       |
| currency (required) | Reference currency to calculate the units                                                                                          |
| display (optional)  | Whether it should be returned in display format or not. Default: false                                                             |
| noRound (optional)  | Determines if the last digit should be rounded based on the decimals values, even if it is a zero decimal currency. Default: false |

## Contributors ✨

<table>
  <tr>
    <td align="center"><a href="https://github.com/KelvinCampelo"><img src="https://avatars2.githubusercontent.com/u/7349839?s=460&v=4" width="100px;" alt="Kelvin Campelo"/><br /><sub><b>Kelvin Campelo</b></sub></a><br /><a href="https://t.me/kelvincampelo" title="Talk to me">💬</a> <a href="https://github.com/KelvinCampelo/zero-decimal-currencies/commits?author=KelvinCampelo" title="Commits">📖</a></td>
    <td align="center"><a href="https://github.com/MagdielCAS"><img src="https://avatars2.githubusercontent.com/u/7864626?s=460&v=4" width="100px;" alt="Magdiel Campelo"/><br /><sub><b>Magdiel Campelo</b></sub></a><br /><a href="https://t.me/magdielcampelo" title="Talk to me">💬</a> <a href="https://github.com/KelvinCampelo/zero-decimal-currencies/commits?author=MagdielCAS" title="Commits">📖</a></td>
    </tr>
</table>

## License

- **MIT** : http://opensource.org/licenses/MIT

## Contributing

Contributions are highly welcome! This repo is commitizen friendly — please read about it [here](http://commitizen.github.io/cz-cli/).
