module.exports = function (str) {
  // TODO
  return str.match(/[a-z\d]+(?:[^a-z\D,])*/g);
}