module.exports = function (str) {
  var regex1 =  /\d+\.(jpeg)|(jpg)$/
  return regex1.test(str);
}
