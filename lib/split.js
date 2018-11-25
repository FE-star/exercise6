module.exports = function (str) {
    // TODO
    const patt = /\r*\n*\s*,\s*\n*\r*/;
    return str.split(patt);
}