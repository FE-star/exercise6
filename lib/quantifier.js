module.exports = function(str) {
  // TODO
  return new RegExp(`[\\d]+\\.jp[e]{0,1}g$`).test(str);
};
