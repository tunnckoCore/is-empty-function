/*!
 * is-empty-function <https://github.com/tunnckoCore/is-empty-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var parseFn = require('parse-function')
var cleanup = require('cleanup-coverage-code')

/**
 * > Check that given string, function or arrow function
 * have empty body, using `parse-function`.
 *
 * **Example**
 *
 * ```js
 * const isEmptyFunction = require('is-empty-function')
 *
 * const fixture = "function codeCov () {__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;};"
 * isEmptyFunction(fixture)            // => true
 * isEmptyFunction('function () {}')   // => true
 * isEmptyFunction('z => {}')          // => true
 * isEmptyFunction('(a, b) => {}')     // => true
 * isEmptyFunction(z => {})            // => true
 * isEmptyFunction((a, b) => {})       // => true
 *
 * // return `false`
 * isEmptyFunction('function () { return true }')      // => false
 * isEmptyFunction('z => { return z * z }')            // => false
 * isEmptyFunction('(a, b) => {}')                     // => false
 * isEmptyFunction(z => { return z + z })              // => false
 * isEmptyFunction((a, b) => { return a * b})          // => false
 * isEmptyFunction((a, b) => a * 2 * z)                // => false
 * isEmptyFunction(function () { return true })        // => false
 * isEmptyFunction(function named () { return true })  // => false
 * ```
 *
 * @name  isEmptyFunction
 * @param  {Function|ArrowFunction|String} `val` passed to [parse-function][parse-function]
 * @return {Boolean}
 * @api public
 */
module.exports = function isEmptyFunction (val) {
  if (!val || !arguments.length) return false
  return !(cleanup(parseFn(val).body).length > 0)
}
