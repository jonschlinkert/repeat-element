'use strict';

module.exports = function repeat(ele, num) {
  var res = [ele];
  var max = num;

  while (num--) {
    res.push.apply(res, res);
    if (res.length >= max) {
      break;
    }
  }

  return res.slice(0, max);
};
