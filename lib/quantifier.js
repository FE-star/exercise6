module.exports = function (str) {
  const reg = /^\d+\.jp[e]?g$/g
  return reg.test(str)
}