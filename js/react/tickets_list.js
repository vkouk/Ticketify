var React = require('react');

var TicketsList = React.createClass({
    render: function() {

        var rows = this.props.tickets.map(function(tickets, index) {
                return (
                    <tr key={index}>
                        <td>{tickets.name}</td>
                        <td>{tickets.description}</td>
                        <td>€{parseFloat(tickets.price).toFixed(2)}</td>
                        <td>{tickets.category_name}</td>
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