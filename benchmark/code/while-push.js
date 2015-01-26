'use strict';

module.exports = function repeat(ele, num) {
  var arr = [];

  while (num--) {
    arr.push(ele);
  }

  return arr;
};
