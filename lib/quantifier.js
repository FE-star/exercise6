module.exports = function (str) {
  var res = str.match(/^\d+\.jpe?g$/)
  return res ? res.input : false
}