/*!
 * repeat-element <https://github.com/jonschlinkert/repeat-element>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

require('mocha');
var fs = require('fs');
var path = require('path');
var assert = require('assert');
var argv = require('minimist')(process.argv.slice(2));
var files = fs.readdirSync('./benchmark/code');
var repeat = require('./');

var keys = Object.keys(argv);
if (keys && keys[1]) {
  var lib = files.filter(function(fp) {
    return keys[1] === path.basename(fp, path.extname(fp));
  });
  repeat = require(path.resolve('./benchmark/code/' + lib[0]));
}

it('should repeat the given string:', function() {
  assert.deepEqual(repeat('a', 5), ['a', 'a', 'a', 'a', 'a']);
  assert.deepEqual(repeat('a', 50), ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a','a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']);
  assert.deepEqual(repeat('a', 1), ['a']);
  assert.deepEqual(repeat('a', 0), []);
});

it('should repeat the given object:', function() {
  assert.deepEqual(repeat({a: 'b'}, 5), [{a: 'b'},{a: 'b'},{a: 'b'},{a: 'b'},{a: 'b'}]);
});

it('should repeat null:', function() {
  assert.deepEqual(repeat(null, 5), [null, null, null, null, null]);
});
