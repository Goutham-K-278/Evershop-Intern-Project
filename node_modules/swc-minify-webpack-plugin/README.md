# SwcMinifyWebpackPlugin

Faster minimizer plugin for webpack based on `swc.minify()`.

This plugin is forked from [swc-webpack-plugin](https://github.com/ice-lab/swc-webpack-plugin), with following differences:

- Simpiler options
- Use `swc.minify()` instead of `swc.transform()`, for better performance
- enable `mangle` by default for better compression rate

This plugin is faster than [terser-webpack-plugin's swc mode](https://webpack.js.org/plugins/terser-webpack-plugin/#swc).

## Install

```
npm i -D swc-minify-webpack-plugin
```

## Usage

Recommended configuration:

```js
// webpack.config.js
const { SwcMinifyWebpackPlugin } = require('swc-minify-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [new SwcMinifyWebpackPlugin()],
  },
};
```

Custom configuration:

```js
// webpack.config.js
const { SwcMinifyWebpackPlugin } = require('swc-minify-webpack-plugin');

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new SwcMinifyWebpackPlugin({
        compress: false,
        mangle: true,
      }),
    ],
  },
};
```

## Options

### `compress`

Type: `boolean | object`

Default: `true`

See <https://swc.rs/docs/configuration/minification#jscminifycompress>

### `mangle`

Type: `boolean | object`

Default: `true`

See <https://swc.rs/docs/configuration/minification#jscminifymangle>

### `format`

Type: `object`

See <https://swc.rs/docs/configuration/minification#jscminifyformat>
