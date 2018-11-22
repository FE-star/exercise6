module.exports = function (str) {
  // TODO
  return str.replace(/[\n\r\s]/g,"").split(/\,/)
}