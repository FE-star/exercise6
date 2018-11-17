module.exports = function (str) {
  const reg = /[,\s\n\r]+/
  return str.split(reg)
}