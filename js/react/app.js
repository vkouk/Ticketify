var React = require('react');
var ReactDOM = require('react-dom');

var DisplayTickets = require('./DisplayTickets');

var TicketAppInterface = React.createClass({
    render: function () {
        return <DisplayTickets/>;
    }
});

ReactDOM.render(
    <TicketAppInterface />,
    document.getElementById('ticketappinterface')
); //render