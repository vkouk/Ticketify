var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = require('./login.js');

var TicketAppInterface = React.createClass({
    render: function () {
        return(
            <h1>todo</h1>
        );
    }
});

ReactDOM.render(
    <TicketAppInterface />,
    document.getElementById('ticketappinterface')
); //render