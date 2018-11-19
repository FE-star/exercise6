module.exports = function (str) {
  return Array.from(str.match(/(\w+)/g))
}