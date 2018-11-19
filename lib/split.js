module.exports = function (str) {
  // TODO
  return str.split(',').map(element => {
    return element.match(/\w+/)[0]
  })
}