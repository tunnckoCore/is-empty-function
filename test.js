/*!
 * is-empty-function <https://github.com/tunnckoCore/is-empty-function>
 *
 * Copyright (c) 2015-2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isEmptyFunction = require('./index')

test('body is not empty', function (done) {
  test.strictEqual(isEmptyFunction('function () { return true }'), false)
  test.strictEqual(isEmptyFunction('function c (d) {return d} foo'), false)
  test.strictEqual(isEmptyFunction(function () { return true }), false)
  test.strictEqual(isEmptyFunction(function (a) { return a }), false)
  test.strictEqual(isEmptyFunction('z => { return z * 3 }'), false)
  test.strictEqual(isEmptyFunction('(a, b) => { return a * b}'), false)
  test.strictEqual(isEmptyFunction('(x, y) => x + 2 + y'), false)

  // on enviroment which support arrow functions
  // test.strictEqual(isEmptyFunction(z => { return z * 3 }), false)
  // test.strictEqual(isEmptyFunction((a, b) => { return a * b}), false)
  // test.strictEqual(isEmptyFunction((x, y) => x + 2 + y), false)
  done()
})

test('body is empty', function (done) {
  var fixture = "function codeCov (a) {__cov_Ejgcx$XN18CSfmeWn$f7vQ.f['2']++;}"

  test.strictEqual(isEmptyFunction(fixture), true)
  test.strictEqual(isEmptyFunction('function () {}'), true)
  test.strictEqual(isEmptyFunction(function () {}), true)
  test.strictEqual(isEmptyFunction('function (a) {}'), true)
  test.strictEqual(isEmptyFunction(function (b) {}), true)
  test.strictEqual(isEmptyFunction('function c (d) {}'), true)
  test.strictEqual(isEmptyFunction(function x (y) {}), true)
  test.strictEqual(isEmptyFunction('z => {}'), true)
  test.strictEqual(isEmptyFunction('(foo, bar) => {}'), true)
  test.strictEqual(isEmptyFunction('() => {}'), true)
  test.strictEqual(isEmptyFunction('function c (d) {} foo'), true)

  // on enviroment which support arrow functions
  // test.strictEqual(isEmptyFunction(z => {}), true)
  // test.strictEqual(isEmptyFunction((a, b) => {}), true)
  done()
})
