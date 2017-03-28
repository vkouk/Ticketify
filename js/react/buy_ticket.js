var React = require('react');

var CreateTicket = require('./create_ticket.js');
var TicketsTable = require('./tickets_table.js');

var BuyTicket = React.createClass({
    getInitialState: function() {
        return {
            tickets: [],
            createBodyVisible : false
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

    toggleAddDisplay: function() {
        var tempVisibility = !this.state.createBodyVisible;
        this.setState({
            createBodyVisible: tempVisibility
        }); //setState
    }, //toggleAddDisplay

    render: function () {
        var filteredTickets = this.state.tickets;

        return(
            <div>
                <TicketsTable
                    tickets={filteredTickets} />

                <CreateTicket
                    bodyVisible = {this.state.createBodyVisible}
                    handleToggle = { this.toggleAddDisplay }
                />
            </div>
        );
    }
});

module.exports = BuyTicket;
