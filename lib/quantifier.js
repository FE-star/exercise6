module.exports = function (str) {
  // TODO
  const reg = /^\d{1,}\.(jpg|jpeg)$/;
  return reg.test(str);
}
