module.exports = function (str) {
  // TODO
  return str.split(',').map(item => item.match(/\w+/)[0])
}