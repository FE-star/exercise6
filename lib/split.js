module.exports = function (str) {
  const reg = /\s*,\s*/;
  return str.split(reg);
}