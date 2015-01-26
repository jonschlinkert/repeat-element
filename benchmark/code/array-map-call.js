'use strict';

module.exports = function repeat(ele, num) {
  return Array.prototype.map.call([] + Array(num + 1), function () {
    return ele;
  });
};
