var R = require('ramda');


var Utils = function() {

};

Utils.prototype.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Utils.prototype.getRandomArray = function() {
  var len = this.random(0,5);
  var arr = [];
  R.times(function() {
    arr.push(this.random(0,10));
  }.bind(this), len);
  return arr;
};

Utils.prototype.getArrayFromUser = function() {
  var len = prompt('Enter rows count:');
  var len = parseInt(len, 10);
  if(isNaN(len)){
    alert(len + ' isn`t valid number, please try again');
    return false;
  }
  var arr = [];
  for(var i = 0; i < len; i++){
    var n = prompt('Enter row ' + (i+1) + ' square count:');
    var n = parseInt(n, 10);
    if(isNaN(n)){
      alert(len + ' isn`t valid number, please try again');
      return false;
    } 
    arr.push(n);
  }
  return arr;
  
};

module.exports = new Utils;