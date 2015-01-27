var React = require('react/addons');
var R = require('ramda');
var cx = React.addons.classSet;

var Row = require('./Row.react');
var Action = require('../actions/Action.js');

var Group =
  React.createClass({
    render:function(){
      var active = (this.props.active.group === this.props.index);
      var rows = R.mapIndexed(function(row, i) {
        return <Row data={row} key={i} rowIndex={i} active={active ? this.props.active : false} />
      }.bind(this), this.props.data);
      
      if(this.props.data.length === 0){
        rows = (<div className="empty-group">Empty group</div>);
      }
      
      var classes = cx({
        'group': true,
        'active': active
      });
      return <div className={classes} onClick={this._onClick}>
          {rows}
        </div>
    },
    _onClick: function() {
      Action.setActiveGroup(this.props.index);
    }
  });
module.exports = Group;