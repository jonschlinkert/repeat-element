'use strict';

module.exports = function repeat(ele, num) {
  return Array.apply([], new Array(num)).map(function (nil) {
    return ele;
  });
};
