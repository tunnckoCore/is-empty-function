/*!
 * is-empty-function <https://github.com/tunnckoCore/is-empty-function>
 *
 * Copyright (c) 2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var isEmptyFunction = require('./index')

test('is-empty-function:', function () {
  test('should return `true`', function () {
    test('when empty anonymous function given', function (done) {
      var fixture = function () {}
      var actual = isEmptyFunction(fixture)
      var expected = true

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when empty named function given', function (done) {
      var fixture = function named () {}
      var actual = isEmptyFunction(fixture)
      var expected = true

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when empty anonymous function in string given', function (done) {
      var fixture = 'function() {}'
      var actual = isEmptyFunction(fixture)
      var expected = true

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when empty named function in string given', function (done) {
      var fixture = 'function named() {}'
      var actual = isEmptyFunction(fixture)
      var expected = true

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when named function contains coverage code', function (done) {
      var fixture = 'function named() {}'
      var actual = isEmptyFunction(fixture)
      var expected = true

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
  })
  test('should return `false`', function () {
    test('when no arguments given', function (done) {
      var actual = isEmptyFunction()
      var expected = false

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when anonymous function with no empty body is given', function (done) {
      var fixture = function () { return true }
      var actual = isEmptyFunction(fixture)
      var expected = false

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when anonymous function in string with no empty body is given', function (done) {
      var fixture = 'function() { return true; }'
      var actual = isEmptyFunction(fixture)
      var expected = false

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when named function with no empty body is given', function (done) {
      var fixture = function named () { return true }
      var actual = isEmptyFunction(fixture)
      var expected = false

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
    test('when named function in string with no empty body is given', function (done) {
      var fixture = 'function named() { return true; }'
      var actual = isEmptyFunction(fixture)
      var expected = false

      test.equal(typeof actual, 'boolean')
      test.equal(actual, expected)
      done()
    })
  })
})
