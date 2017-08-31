[![Build Status](https://travis-ci.org/kaelzhang/contenthash-html-webpack-plugin.svg?branch=master)](https://travis-ci.org/kaelzhang/contenthash-html-webpack-plugin)
[![Coverage](https://codecov.io/gh/kaelzhang/contenthash-html-webpack-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/contenthash-html-webpack-plugin)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/contenthash-html-webpack-plugin?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/contenthash-html-webpack-plugin)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/contenthash-html-webpack-plugin.svg)](http://badge.fury.io/js/contenthash-html-webpack-plugin)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/contenthash-html-webpack-plugin.svg)](https://www.npmjs.org/package/contenthash-html-webpack-plugin)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/contenthash-html-webpack-plugin.svg)](https://david-dm.org/kaelzhang/contenthash-html-webpack-plugin)
-->

# contenthash-html-webpack-plugin

Makes `[contenthash]` available for [html-webpack-plugin](https://www.npmjs.com/package/html-webpack-plugin)

## Install

```sh
$ npm install contenthash-html-webpack-plugin --save-dev
```

## Usage

```js
import ContentHashHtmlPlugin from 'contenthash-html-webpack-plugin'
import HtmlPlugin from 'html-webpack-plugin'

const webpackConfig = {
  ...,
  plugins: [
    new HtmlPlugin({
      filename: `[file]-[contenthash:16].html`,
      ...
    }),
    new ContentHashHtmlPlugin()
  ]
}

// Then the file hash will be the hash of the file content
```

## Available Placeholder Format

```js
'[contenthash]'
'[contenthash:7]'           // maxLength: 7
'[md5:contenthash:hex]'     // hashType: md5, digestType: hex

'[md5:contenthash:hex:7]'
// hashType: md5
// digestType: hex
// maxLength: 7
```

## License

MIT
