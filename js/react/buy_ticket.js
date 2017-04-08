const React = require('react');

const TicketsList = require('./tickets_list.js');

const BuyTicket = React.createClass({
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
        const filteredTickets = this.state.tickets;

        return (
             <TicketsList
                tickets={filteredTickets}
             />
        );
    }
});

module.exports = BuyTicket;
