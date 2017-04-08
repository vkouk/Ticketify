const React = require('react');

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
        const rows = this.state.tickets.map(function(tickets, index) {
            return (
                <tr key={index}>
                    <td>{tickets.name}</td>
                    <td>{tickets.description}</td>
                    <td>€{parseFloat(tickets.price).toFixed(2)}</td>
                    <td>{tickets.category_name}</td>
                    <td>
                        <a href='#'
                           className='btn btn-info'> Buy
                        </a>
                    </td>
                </tr>
            );
        }.bind(this));

        return(
            !rows.length
                ? <div className='alert alert-danger'>No tickets found.</div>
                :
                <table className='table table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Buy</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
        );
    }
});

module.exports = BuyTicket;
