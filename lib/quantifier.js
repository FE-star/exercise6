module.exports = function (str) {
  // TODO
  const regex = /^\d+.(jpg|jpeg)$/;
  return regex.test(str)
}