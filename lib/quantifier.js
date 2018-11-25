module.exports = function (str) {
  // TODO
    const patt=/^\d+\.(jpg|jpeg)$/;
    return patt.test(str);
}