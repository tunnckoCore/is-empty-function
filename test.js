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

test('the body is not empty (including when arrow function)', function (done) {
  var arrowFnStr = '(j, k) => {\n  var foo = 1\n  return j + k}'
  var fnStr = 'function named (j, k) {\n  var foo = 1\n  return j + k}'

  test.strictEqual(isEmptyFunction(arrowFnStr), false)
  test.strictEqual(isEmptyFunction(fnStr), false)
  done()
})

test('empty body (including when arrow function)', function (done) {
  var emptyArrow = '(a) => {}'
  var emptyFn = 'function named (a) {}'

  test.strictEqual(isEmptyFunction(emptyArrow), true)
  test.strictEqual(isEmptyFunction(emptyFn), true)
  done()
})

// old tests below
test('should return `true` when empty anonymous function given', function (done) {
  var fixture = function () {}
  var actual = isEmptyFunction(fixture)
  var expected = true

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `true` when empty named function given', function (done) {
  var fixture = function named () {}
  var actual = isEmptyFunction(fixture)
  var expected = true

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `true` when empty anonymous function in string given', function (done) {
  var fixture = 'function () {}'
  var actual = isEmptyFunction(fixture)
  var expected = true

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `true` when empty named function in string given', function (done) {
  var fixture = 'function named () {}'
  var actual = isEmptyFunction(fixture)
  var expected = true

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `true` when named function contains coverage code', function (done) {
  var fixture = 'function named () {}'
  var actual = isEmptyFunction(fixture)
  var expected = true

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `false` when no arguments given', function (done) {
  var actual = isEmptyFunction()
  var expected = false

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `false` when anonymous function with no empty body is given', function (done) {
  var fixture = function () { return true }
  var actual = isEmptyFunction(fixture)
  var expected = false

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `false` when anonymous function in string with no empty body is given', function (done) {
  var fixture = 'function() { return true }'
  var actual = isEmptyFunction(fixture)
  var expected = false

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `false` when named function with no empty body is given', function (done) {
  var fixture = function named () { return true }
  var actual = isEmptyFunction(fixture)
  var expected = false

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})

test('should return `false` when named function in string with no empty body is given', function (done) {
  var fixture = 'function named () { return true }'
  var actual = isEmptyFunction(fixture)
  var expected = false

  test.strictEqual(typeof actual, 'boolean')
  test.strictEqual(actual, expected)
  done()
})
