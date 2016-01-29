# [is-empty-function][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Check that given string, function or arrow function have empty body, using `parse-function`.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-empty-function --save
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
const isEmptyFunction = require('is-empty-function')
```

### [isEmptyFunction](./index.js#L46)
> Check that given string, function or arrow function have empty body, using `parse-function`.

- `[val]` **{Function|ArrowFunction|String}** passed to [parse-function][parse-function]  
- `return` **{Boolean}**

**Example**

```js
const isEmptyFunction = require('is-empty-function')

const fixture = "function codeCov () {__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;};"
isEmptyFunction(fixture)            // => true
isEmptyFunction('function () {}')   // => true
isEmptyFunction('z => {}')          // => true
isEmptyFunction('(a, b) => {}')     // => true
isEmptyFunction(z => {})            // => true
isEmptyFunction((a, b) => {})       // => true

// return `false`
isEmptyFunction('function () { return true }')      // => false
isEmptyFunction('z => { return z * z }')            // => false
isEmptyFunction('(a, b) => {}')                     // => false
isEmptyFunction(z => { return z + z })              // => false
isEmptyFunction((a, b) => { return a * b})          // => false
isEmptyFunction((a, b) => a * 2 * z)                // => false
isEmptyFunction(function () { return true })        // => false
isEmptyFunction(function named () { return true })  // => false
```


## Related
- [cleanup-coverage-code](https://github.com/tunnckoCore/cleanup-coverage-code): Cleanup ugly code added by code coverage tools during the test process. Like this one `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;`.
- [is-ansi](https://github.com/tunnckocore/is-ansi): Check that given string contain ANSI color codes, without CLI
- [is-async-function](https://github.com/tunnckocore/is-async-function): Check that given function is async (callback) function or not. Trying to guess that based on check if `callback`, `cb`, `done` or `next` exists as function argument name.
- [is-backslash](https://github.com/tunnckocore/is-backslash): Checks given value is backslash - support char code number, hex, unicode or string value to be given.
- [is-installed](https://github.com/tunnckoCore/is-installed): Checks that given package is installed on the system - globally or locally.
- [is-missing](https://github.com/tunnckocore/is-missing): Check that given `name` or `user/repo` exists in npm registry or in github as user repository.
- [is-real-object](https://github.com/tunnckocore/is-real-object): Returns `true` if a value is any type of object, but not an array. Browserify-ready.
- [parse-function](https://github.com/tunnckocore/parse-function): Parse a function, arrow function or string to object with `name`, `args`, `params` and `body` properties.
- [relike](https://github.com/hybridables/relike): Simple promisify a callback-style function with sane defaults. Support promisify-ing sync functions.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-empty-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-empty-function
[npmjs-img]: https://img.shields.io/npm/v/is-empty-function.svg?label=is-empty-function

[license-url]: https://github.com/tunnckoCore/is-empty-function/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/is-empty-function
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/is-empty-function.svg

[travis-url]: https://travis-ci.org/tunnckoCore/is-empty-function
[travis-img]: https://img.shields.io/travis/tunnckoCore/is-empty-function.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/is-empty-function
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/is-empty-function.svg

[david-url]: https://david-dm.org/tunnckoCore/is-empty-function
[david-img]: https://img.shields.io/david/tunnckoCore/is-empty-function.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

[parse-function]: https://github.com/tunnckoCore/parse-function