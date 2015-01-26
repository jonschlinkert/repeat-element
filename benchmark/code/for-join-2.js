'use strict';

module.exports = function repeat(ele, num) {
  var arr = [];

  for (; 0 < num; arr[--num] = ele);

  return arr;
};
