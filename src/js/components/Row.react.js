var React = require('react');
var Square = require('./Square.react');
var R = require('ramda');

var Row =
  React.createClass({
    render:function(){
      var squares = [];
      R.times(function() {
        squares.push(<Square />)
      }, this.props.data);
      return <div className="row">
        {squares}
      </div>
    }
  });
module.exports = Row;