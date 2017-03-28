var React = require('react');

var Tickets = React.createClass({
    getInitialState : function () {
        return {
            allTickets: []
        }
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get('./server/display_ticket.php', function(tickets) {
            this.setState({
                allTickets: JSON.parse(tickets)
            }); //setState
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    render: function () {
        return(
            <h1>Show Tickets</h1>
        );
    } //render
});

module.exports = Tickets;
