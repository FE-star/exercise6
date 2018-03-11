module.exports = function (str) {
  // TODO
  return str.replace(/[\r\n\s\t]/g, '').split(',')
}