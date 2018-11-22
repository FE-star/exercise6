module.exports = function (str) {
  // TODO
  let regexp = /^([0-9]+)\.(jpg|jpeg)$/;
  return regexp.test(str);
}