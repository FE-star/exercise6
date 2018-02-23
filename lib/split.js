module.exports = function (str) {
  // TODO
  var reg = /[\r\n\s\t]/g;
  var newStr = str.replace(reg, '');
  return newStr.split(',')
}