module.exports = function (str) {
  let arr =/^\d+\.(?:jpg|jpeg)$/.exec(str);
  return arr ? arr[0] : '';
}