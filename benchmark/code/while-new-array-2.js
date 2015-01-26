module.exports = repeat;

function repeat(ele, num) {
  var arr = new Array(num);
  var i = 0;

  while (num--) {
    arr[i++] = ele;
  }

  return arr;
}
