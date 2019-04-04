module.exports = function (str) {
    // TODO
    let reg = /^\d+(\.jpg|\.jpeg)$/
    return reg.test(str)
}