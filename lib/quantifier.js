module.exports = function (str) {
  return /^\d+\.(jpg|jpeg)$/i.exec(str);
}