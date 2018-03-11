module.exports = function (str) {
  // TODO
  var reg = /\s*,\s*/;
  return str.split(reg);
}