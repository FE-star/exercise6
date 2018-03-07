module.exports = function (str) {
  // TODO
  var reg = /^[^\.\D]\d*\.(jpg|jpeg)$/

  return reg.test(str);
}