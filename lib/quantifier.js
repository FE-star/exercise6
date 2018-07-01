module.exports = function (str) {
  // TODO
  const regex = /^\d+\.jpe?g$/;
  return regex.test(str);
}