module.exports = function (str) {
  // TODO
  var arr = [];
  str.replace(/\w+/g, function (v) { arr.push(v)})
  return arr;
}