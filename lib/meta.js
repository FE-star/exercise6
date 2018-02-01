module.exports = function (str) {
  // TODO
  var reg = /\.$/
  var match = str.match(reg) || []
  return match[0]
}
