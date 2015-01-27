var React = require('react/addons');
var cx = React.addons.classSet;

var EmptyRow =
  React.createClass({
    render:function(){
      var classes = cx({
        'empty-row': true,
        'active': this.props.active
      });
      return <div className={classes}>Empty row</div>
    }
  });
module.exports = EmptyRow;