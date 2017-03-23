var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var TicketifyAppInterface = React.createClass({
  
  render: function() {
    	return(
	    	<h1>Hello there</h1>
    	)
  } //render
}); //TicketifyAppInterface

ReactDOM.render(
  <TicketifyAppInterface />,
  document.getElementById('ticketappinterface')
); //render