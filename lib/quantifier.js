module.exports = function (str) {
  // TODO
  // return /\d+\.((jpg)|(jpeg))$/.test(str)
  return /\d+\.jp(?:g|eg)$/.test(str)
}