var Action = require('./actions/Action.js');

KeyboardEvents = function() {

};

KeyboardEvents.prototype.bind = function() {
  var KEY_MAP = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  }
  $(function() {
    $(document).on('keydown', function(e) {
      if(e.which < KEY_MAP.LEFT || e.which > KEY_MAP.DOWN){
        return true;
      }
      e.preventDefault();
      switch(e.which){
        case KEY_MAP.LEFT:
          Action.moveLeft();
          break;
        case KEY_MAP.UP:
          Action.moveUp();
          break;
        case KEY_MAP.RIGHT:
          Action.moveRight();
          break;
        case KEY_MAP.DOWN:
          Action.moveDown();
          break;

      }
    });
  });
};
module.exports = new KeyboardEvents;