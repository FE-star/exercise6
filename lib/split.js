module.exports = function (str) {
  str = str.replace(/\s/g, '');
  let result = str.split(',');
  return result;
};