var React = require('react');

var TicketsRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.tickets.name}</td>
                <td>{this.props.tickets.description}</td>
                <td>${parseFloat(this.props.tickets.price).toFixed(2)}</td>
            </tr>
        );
    }
});

var TicketsList = React.createClass({
    render: function() {

        var rows = this.props.tickets.map(function(tickets, index) {
                return (
                    <TicketsRow
                        key={index}
                        tickets={tickets}
                    />
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
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
        );
    }
});

module.exports = TicketsList;
module.exports = TicketsRow;