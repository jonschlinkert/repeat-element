'use strict';

module.exports = function repeat(ele, num) {
  return Array(num + 1).join(1).split('').map(function (nil) {
    return ele;
  });
};

