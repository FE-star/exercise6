module.exports = function (str) {
  // 匹配一张名字为数字的 jpg 图片
  var reg = /^\d+\.(jpg|jpeg)$/.test(str);
  return reg;
}
