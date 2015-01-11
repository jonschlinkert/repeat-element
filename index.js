/*!
 * repeat-element <https://github.com/jonschlinkert/repeat-element>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function repeat(ele, n) {
  var res = [];
  while (n--) {
    res.push(ele);
  }
  return res;
};
