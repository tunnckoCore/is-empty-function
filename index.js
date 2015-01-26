/**
 * is-empty-function <https://github.com/tunnckoCore/is-empty-function>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var parseFunction = require('parse-function');

/**
 * Check given function have empty body or not, and returns true or false.
 *
 * **Example:**
 *
 * ```js
 * var isEmptyFunction = require('is-empty-function');
 *
 * var fixture = 'function() {}';
 * isEmptyFunction(fixture);
 * //=> true
 *
 * var fixture = function named() {};
 * isEmptyFunction(fixture);
 * //=> true
 *
 * var fixture = function() { return true; };
 * isEmptyFunction(fixture);
 * //=> false
 *
 * var fixture = function named() { return true; };
 * isEmptyFunction(fixture);
 * //=> false
 * ```
 *
 * @name isEmptyFunction
 * @param  {Function|String} `[fn]` passed to [parse-function][parse-function]
 * @return {Boolean}
 * @api private
 */
module.exports = function isEmptyFunction(fn) {
  if (fn) {
    return parseFunction(fn).body.length ? false : true;
  }
  return false;
};