module.exports = function (str) {
  let arr =/.*\.$/.exec(str);
  return arr ? arr[0] : '';
}