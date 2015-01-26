/**
 * is-empty-function <https://github.com/tunnckoCore/is-empty-function>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var parseFunction = require('parse-function');

module.exports = function isEmptyFunction(fn) {
  if (fn) {
    return parseFunction(fn).body.length ? false : true;
  }
  return false;
};
