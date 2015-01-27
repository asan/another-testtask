var React = require('react');
var TestApp = require('./components/TestApp.react');
var KeyboardEvents = require('./KeyboardEvents');

KeyboardEvents.bind();

React.render(
  <TestApp />,
  document.getElementById('app')
);