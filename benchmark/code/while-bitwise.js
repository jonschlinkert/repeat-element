
module.exports = repeat;

function repeat(ele, num) {
  var arr = [ele];
  var res = [];

  while (num > 0) {
    if (num & 1) {
      res.push.apply(res, arr);
    }
    num >>= 1;
    arr.push.apply(arr, arr);
  }
  return res;
}
