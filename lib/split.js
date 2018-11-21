module.exports = function (str) {
  // TODO
  // \w：用于匹配字母，数字或下划线字符； 
  // \W：用于匹配所有与\w不匹配的字符； 
  let reg = /\W+/;
  let res = str.split(reg);
  return res;
}