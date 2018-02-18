module.exports = function (str) {
    const result = /[\r]*[\b]*[\s]*/g
    str = str.replace(result,'').split(',')
    return str
  // TODO
}