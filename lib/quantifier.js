module.exports = function(str) {
  const reg = /^[0-9]+\.jp[e]?g$/;
  return reg.test(str);
};
