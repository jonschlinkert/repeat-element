'use strict';

module.exports = repeat;

function repeat(ele, num) {
  if (num === 0) return [];

  var res = [ele];
  var len = res.length;

  if (len < num) {
    for (var i = num - 1 - len; i >= 0; i--) {
      res[i + len] = res[i % len];
    }
  }
  return res;
}
