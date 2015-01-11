/*!
 * repeat-element <https://github.com/jonschlinkert/repeat-element>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var assert = require('assert');
var repeat = require('./');

it('should repeat the given string:', function () {
  assert.deepEqual(repeat('a', 5), ['a', 'a', 'a', 'a', 'a']);
  assert.deepEqual(repeat('a', 1), ['a']);
  assert.deepEqual(repeat('a', 0), []);
});
