module.exports = repeat;

function repeat(ele, num) {
  var arr = new Array(num);

  for (var i = num - 1; i >= 0; i--) {
    arr[i] = ele;
  }

  return arr;
}
