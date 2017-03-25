var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = require('./login.js');

var TicketAppInterface = React.createClass({
    render: function () {
        return(
            <LoginForm/>
        );
    }
});

ReactDOM.render(
    <TicketAppInterface />,
    document.getElementById('ticketappinterface')
); //render