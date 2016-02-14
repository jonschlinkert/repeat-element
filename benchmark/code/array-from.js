'use strict';

function getThis() {
  return this;
}

module.exports = function repeat(ele, num) {
  return Array.from({length: num}, getThis, ele);
};
