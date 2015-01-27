var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Store = function() {
  this.groups = require('./initialData.json'),
  this.active = {
    group: 0,
    row: 0,
    col: 0
  }
};

util.inherits(Store, EventEmitter);

Store.prototype.addGroup = function(arr) {
  this.groups.push(arr);
  this.emit('change');
}

Store.prototype.setActiveGroup = function(index){
  if(this.active.group === index){
    return true;
  }
  this.active.group = index;
  this.active.row = 0;
  this.active.col = 0;
  this.emit('change');
}

Store.prototype.checkBoundaries = function() {
  //left boundary
  if(this.active.col < 0){
    this.active.col = 0;
  }
  //top boundary
  if(this.active.row < 0){
    this.active.row = 0;
  }
  //right boundary
  var activeGroup = this.groups[this.active.group];
  var colsInActiveRow = activeGroup[this.active.row];
  if(this.active.col >  colsInActiveRow - 1){
    this.active.col = colsInActiveRow - 1;
  }
  //bottom boundary
  if(this.active.row > activeGroup.length - 1){
    this.active.row = activeGroup.length - 1;
  }
}

Store.prototype.moveLeft = function(){
  this.active.col -= 1;
  this.checkBoundaries();
  this.emit('change');
}

Store.prototype.moveUp = function(){
  this.active.row -= 1;
  this.checkBoundaries();
  this.emit('change');
}

Store.prototype.moveRight = function(){
  this.active.col += 1;
  this.checkBoundaries();
  this.emit('change');
}

Store.prototype.moveDown = function(){
  this.active.row += 1;
  this.checkBoundaries();
  this.emit('change');
}
module.exports = new Store;