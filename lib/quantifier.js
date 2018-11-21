module.exports = function (str) {
  // TODO
  let reg = /^\d+\.(jpg|jpeg)$/;
  let res = reg.test(str);
  return res;
}