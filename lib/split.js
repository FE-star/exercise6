module.exports = function (str) {
  // TODO
  // return str.replace(/\s/g, '').split(',')
  return str.split(/\s*,\s*/g)
}