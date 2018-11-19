module.exports = function (str) {
  var res=str.match(/\.$/)
  return res?res.input:false
}