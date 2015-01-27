var React = require('react');
var Square = require('./Square.react');
var EmptyRow = require('./EmptyRow.react');
var R = require('ramda');

var Row =
  React.createClass({
    isGroupActive: function() {
      return !!this.props.active;
    },
    isRowActive: function() {
      return this.props.rowIndex === this.props.active.row;
    },
    isColActive: function(colIndex) {
      return colIndex === this.props.active.col;
    },
    render:function(){
      var squares = [];
      R.times(function(colIndex) {
        var active = false;
        if(this.isGroupActive() &&
           this.isRowActive() &&
           this.isColActive(colIndex)){
          active = true;
        }
        squares.push(<Square active={active} key={colIndex} />);
      }.bind(this), this.props.data);

      if(this.props.data === 0){
        var active = false;
        if(this.isGroupActive() &&
           this.isRowActive()){
          active = true;
        }
        squares.push(<EmptyRow active={active} />);
      }
      return <div className="row">
        {squares}
      </div>
    }
  });
module.exports = Row;