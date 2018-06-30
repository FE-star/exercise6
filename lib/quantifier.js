module.exports = function (str) {
  let reg = /^\d+\.jpe?g$/
  return reg.test(str)
}