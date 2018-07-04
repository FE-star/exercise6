module.exports = function (str) {
  // TODO
  const regx=/\d+.(jpg|jpeg)$/;
  return regx.test(str);
}