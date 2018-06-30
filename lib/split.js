module.exports = function (str) {
  let reg = /\d+|\w+/g
  return str.match(reg)
}