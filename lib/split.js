module.exports = function (str) {
  // TODO
  str += ''
  return str.split(/[\n|\r| ]*,[\n|\r| ]*/g)
}
