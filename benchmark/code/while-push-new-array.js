'use strict';

module.exports = function repeat(ele, num) {
  var arr = new Array(num);

  while (num--) {
    arr.push(ele);
  }

  return arr;
};
