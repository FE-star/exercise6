module.exports = function (str) {
  // TODO
  // => ^和+可以共享同一个 字符/字符集/块 = 表达式
  return /^\d+\.(jp(e)?g)$/.test(str);
}