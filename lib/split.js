module.exports = function (str) {
  // TODO
  var reg = /[0-9]+|\w+/g;
  return str.match(reg)
}