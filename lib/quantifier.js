module.exports = function (str) {
  // TODO
  var regex = /^\d+\.jpe?g$/
  return regex.test(str) ? str : null
}