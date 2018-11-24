module.exports = function (str) {
  var regex1 = /[\n|\r|\s]*,[\n|\r|\s]*/g;
  return str.split(regex1);
}
