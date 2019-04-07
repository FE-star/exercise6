module.exports = function (str) {
  // TODO
  const regExp = /(\n|\r|\s)/g;
  str = str.replace(regExp, '');
  return str.split(',');
}