'use strict';

module.exports = function repeat(ele, num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr = arr.concat(ele);
  }

  return arr;
};
