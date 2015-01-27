var React = require('react');
var R = require('ramda');

var Group = require('./Group.react');
var Store = require('../stores/Store');
var Action = require('../actions/Action.js');


function getStoreState() {
  return {
    groups: Store.groups,
    active: Store.active
  }
};

var APP =
  React.createClass({
    getInitialState: function() {
      return getStoreState();
    },
    componentDidMount: function() {
      Store.on('change', this._onChange);
    },
    componentWillUnmount: function() {
      Store.off('change', this._onChange)
    },
    _onChange: function() {
      this.setState(getStoreState());
    },
    render:function(){

      var groups = R.mapIndexed(function(data, i) {
        return <Group data={data} key={i} index={i} active={this.state.active} />
      }.bind(this), this.state.groups);
      return <div>
          <button onClick={this._addRandomGroup}>Add random group</button>
          <button onClick={this._addGroup}>Add group</button>
          {groups}
        </div>
    },
    _addGroup: function() {
      Action.addGroup();
    },
    _addRandomGroup: function() {
      Action.addRandomGroup();
    }
  });
module.exports = APP;

