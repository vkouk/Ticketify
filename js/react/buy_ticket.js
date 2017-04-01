var React = require('react');

var TicketsList = require('./tickets_list.js');

var BuyTicket = React.createClass({
    getInitialState: function() {
        return {
            tickets: []
        };
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get("./server/display_tickets.php",function (tickets) {
            this.setState({
                tickets: JSON.parse(tickets)
            });
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    render: function () {
        var filteredTickets = this.state.tickets;

        return (
             <TicketsList
                tickets={filteredTickets}
             />
        );
    }
});

module.exports = BuyTicket;
