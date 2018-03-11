module.exports = function (str) {
  // TODO
  var reg = /^\d+\.((jpg)|(jpeg)|(JPG)|(JPEG))$/;
  return reg.test(str);
}