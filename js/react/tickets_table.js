var React = require('react');

var TicketsRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.description}</td>
                <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            </tr>
        );
    }
});

var TicketsTable = React.createClass({
    render: function() {

        var rows = this.props.tickets
            .map(function(tickets, index) {
                return (
                    <TicketsRow
                        key={index}
                        product={tickets} />
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

module.exports = TicketsTable;
module.exports =  TicketsRow;