module.exports = function (str) {
  // TODO
  const regExp = /^[0-9]+\.(jpg|jpeg)$/;
  return regExp.test(str);
}