module.exports = function (str) {
  return /(\d)+\.jp(e)?g$/.test(str);
}