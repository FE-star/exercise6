module.exports = function (str) {
  let reg = /\.+$/
  return reg.test(str)
}