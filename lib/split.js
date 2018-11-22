module.exports = function (str) {
  // TODO
  let regexp = /\s*,\s*/;

  return str.split(regexp);
}