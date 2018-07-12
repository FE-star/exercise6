module.exports = function (str) {
  return /[0-9]{1,}\.jpg$|[0-9]{1,}\.jpeg$/.test(str);
};