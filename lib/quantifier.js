module.exports = function (str) {
  // TODO
  var reg=/^\d+\.jpe?g$/;
  return reg.test(str);
}