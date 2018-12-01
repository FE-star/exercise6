module.exports = function (str) {
  // TODO
  var regx=/^\d+\.(jpg|jpeg)$/;
  return regx.test(str);
}
