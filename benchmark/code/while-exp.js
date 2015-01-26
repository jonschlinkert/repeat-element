'use strict';

module.exports = function repeat(ele, num) {
  var res = [ele];

  while (res.length < num) {
    res = res.concat(res);
  }

  return res.slice(0, num);
};
