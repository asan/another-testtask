var React = require('react');
var R = require('ramda');

var Row = require('./Row.react');


var Group =
  React.createClass({
    render:function(){
      var rows = R.map(function(row) {
        return <Row data={row} />
      },this.props.data);
      return <div className="group active">
          {rows}
        </div>
    }
  });
module.exports = Group;