module.exports = function (str) {
  // TODO
   var regex = /[0-9]+\.(jpg|jpeg)$/;
    return regex.test(str);
}
