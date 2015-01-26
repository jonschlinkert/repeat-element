'use strict';

module.exports = function repeat(ele, num) {
  var res = [];

  while (num--) {
    res = res.concat(ele);
  }

  return res;
};
