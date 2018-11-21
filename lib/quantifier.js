module.exports = function (str) {
  // TODO
  let res = /^\d+\.(jpg|jpeg)$/;
  return res.test(str);
}