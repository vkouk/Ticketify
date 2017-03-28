var React = require('react');

var CreateTicket = React.createClass({
    getInitialState : function () {
        return {
            allTickets: [],
            ticket_name: "",
            ticket_description: "",
            price: ""
        }
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get('./server/display_ticket_category.php', function(tickets) {
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
            <h1>Create new Ticket</h1>
        );
    } //render
});

module.exports = CreateTicket;
