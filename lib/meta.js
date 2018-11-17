module.exports = function (str) {
  const reg = /\.$/g
  return reg.test(str);
}