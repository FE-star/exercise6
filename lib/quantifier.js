module.exports = function (str) {
  // TODO
  var reg = /^[\d]+\.jp(e)?g$/gi
  var match = str.match(reg) || []
  return match[0]
}
