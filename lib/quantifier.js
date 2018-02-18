module.exports = function (str) {
    const pattern = /^[0-9]+(\.jpe?g)$/
    const rege = new RegExp(pattern)
    const result = rege.test(str)
    return result
  // TODO
}