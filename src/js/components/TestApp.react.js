var React = require('react');
var R = require('ramda');

var Group = require('./Group.react');
var Store = require('../stores/Store');

var APP =
  React.createClass({
    render:function(){
      var groups = R.mapIndexed(function(data, i) {
        return <Group data={data} key={i} index={i}/>
      }, Store.groups);
      return <div>
          {groups}
        </div>
    }
  });
module.exports = APP;

