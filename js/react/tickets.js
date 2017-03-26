var React = require('react');

var Tickets = React.createClass({
    getInitialState : function () {
        return {
            allTickets: [],
            ticket_name: "",
            ticket_description: "",
            price: ""
        }
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get('server/display_ticket.php', function(tickets) {
            console.dir(tickets);
            this.setState({
                ticket_name: JSON.parse(tickets)
            }); //setState
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    render: function () {
        return(
            <h1>Purch your Ticket</h1>
        );
    } //render
});

module.exports = Tickets;
