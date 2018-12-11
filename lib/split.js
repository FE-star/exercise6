module.exports = function (str) {
  // TODO
  const clearStr = str.replace(/[\r\n\ ]/g, "")
  const arr = clearStr.split(',')
  return arr;
}