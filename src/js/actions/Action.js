var Store = require('../stores/Store');
var Utils = require('../Utils');

var Action = function() {

};

Action.prototype.addGroup = function() {
  var arr = Utils.getArrayFromUser();
  Store.addGroup(arr);
};

Action.prototype.addRandomGroup = function() {
  var arr = Utils.getRandomArray();
  Store.addGroup(arr);
};

Action.prototype.setActiveGroup = function(index) {
  Store.setActiveGroup(index);
};

Action.prototype.moveDown = function() {
  Store.moveDown();
};

Action.prototype.moveUp = function() {
  Store.moveUp();
};

Action.prototype.moveLeft = function() {
  Store.moveLeft();
};

Action.prototype.moveRight = function() {
  Store.moveRight();
};

module.exports = new Action;