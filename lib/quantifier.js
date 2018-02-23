module.exports = function (str) {
  // TODO
  var reg = /^(?:\d+).(?:jpg|jpeg)$/
  return reg.test(str);
}