module.exports = function (str) {
  // TODO
  var arr = str.split(",");
  arr.forEach(function(item, index, arr){
    arr[index] = item.replace(/[\r|\n|\s]*/g,"");
  });
  
  return arr;
}