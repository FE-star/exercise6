module.exports = function (str) {
  // TODO
  let regexp = /\d+\.(jpg|jpeg)$/;
  return regexp.test(str);
}