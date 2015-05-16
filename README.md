# is-empty-function [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Checks the given function (or fn.toString()) is with empty body - dont have body.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i is-empty-function --save
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [isEmptyFunction](./index.js#L42)
> Check given function have empty body or not, and returns true or false.

- `[fn]` **{Function|String}**  passed to [parse-function][parse-function]  
- `return` **{Boolean}**

**Example:**

```js
var isEmptyFunction = require('is-empty-function')

var fixture = 'function() {};'
isEmptyFunction(fixture)
//=> true

var fixture = function named() {}
isEmptyFunction(fixture)
//=> true

var fixture = function() { return true }
isEmptyFunction(fixture)
//=> false

var fixture = function named() { return true }
isEmptyFunction(fixture)
//=> false

var fixture = "function codeCov() {__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;};"
isEmptyFunction(fixture)
//=> true
```

## Related
- [cleanup-coverage-code](https://github.com/tunnckoCore/cleanup-coverage-code): Cleanup ugly code added by code coverage tools during the test process. Like this one `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;`.
- [coverage-code-regex](https://github.com/regexps/coverage-code-regex): Regular expression (regex) for matching ugly code that coverage tools add during the test process. Like this one `__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;`
- [function-regex](https://github.com/regexps/function-regex): Function regex. Regular expression for matching function parts. Expose match groups for function name, arguments and function body.
- [hybridify](https://github.com/hybridables/hybridify): Building hybrid APIs. You can use both callback and promise in same time.  Like `asyncFn(name, cb).then().catch()`
- [parse-function](https://github.com/tunnckoCore/parse-function): Parse a given function or string (fn.toString()) to object with `name`, `params`, `parameters`, `args`, `arguments` and `body` properties.


## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/is-empty-function/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/is-empty-function
[npmjs-img]: https://img.shields.io/npm/v/is-empty-function.svg?label=is-empty-function

[license-url]: https://github.com/tunnckoCore/is-empty-function/blob/master/LICENSE.md
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

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg

[parse-function]: https://github.com/tunnckoCore/parse-function
