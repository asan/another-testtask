var React = require('react/addons');
var cx = React.addons.classSet;

var Square =
  React.createClass({
    render:function(){
      var classes = cx({
        'square': true,
        'active': this.props.active
      });
      return <div className={classes}></div>
    }
  });
module.exports = Square;