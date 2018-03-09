module.exports = function (str) {
  // TODO
  var reg = /^\d[0-9]*\.(jpg|jpeg)$/;
  return reg.test(str);
}