var React = require('react');

var DisplayTickets = React.createClass({
    getInitialState : function () {
        return {
           myTickets: []
        }
    }, //getInitialState

    componentDidMount: function() {
        this.serverRequest = $.get('server/display_ticket.php', function(tickets) {
            this.setState({
                myTickets: JSON.parse(tickets)
            }); //setState
        }.bind(this));

        //$('.main .page h1').text("Hello");
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    render: function () {
        //todo
    } //render
});

module.exports = DisplayTickets;
