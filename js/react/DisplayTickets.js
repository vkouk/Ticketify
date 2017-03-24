var React = require('react');

var DisplayTickets = React.createClass({
    getInitialState : function () {
        return {
            categories: [],
            name: '',
            description: '',
        }
    },
    
    componentDidMount: function () {
        this.serverRequest = $.get("server/display_ticket.php", function (cat) {
            this.setState({
                categories: JSON.parse(cat)
            });
        },bind(this));

        $('.main .page h1').text("<?php echo 'bitch' ?> ");
    },

    componentWillUnmount: function () {
        this.serverRequest.abort();
    },

    render: function () {
        return (
           <h1>Helloaooaoa</h1>
        );
    }
});

module.exports = DisplayTickets;
