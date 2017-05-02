const React = require('react');

const Cart = React.createClass({
    getInitialState: function () {
        return {
            cartTickets : [],
            t_name : "",
            t_description : "",
            t_id : "",
            t_category_id : -1
        };
    }, //getInitialState

    componentDidMount: function () {
        this.serverRequest = $.get('./server/displayCart.php', function(cart) {
            this.setState({
                cartTickets : JSON.parse(cart)
            });
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
      this.serverRequest.abort();
    }, //componentWillUnmount

    addToCart: function () {
        $.post("./server/addToCart.php", {
                t_name : this.props.ticket.name,
                t_description : this.props.ticket.description,
                t_id : this.props.ticket.id,
                t_category_id : this.props.ticket.category_id
            },
            function () {
                alert("Ticket added to cart");
                window.href = '/cart';
        }.bind(this));
        alert('Created ' + e.target());
    }, //addToCart

    deleteFromCart: function () {
        let cartID = this.state.cartTickets.cart_id;

        $.post("./server/deleteFromCart.php", {
                del_ids: [cartID]
            },
            function () {
                console.log("Deleted");
                alert("Deleted");
        }.bind(this));
    }, //deleteFromCart

    render: function () {
        let cartTickets = this.state.cartTickets.map(function(cartItem, index) {
            return (
                <tr key={index} onClick={this.deleteFromCart}>
                    <td>{cartItem.ticket_name}</td>
                    <td>{cartItem.ticket_description}</td>
                    <td>{cartItem.cat_name}</td>
                    <td onClick={this.deleteFromCart}>
                        <button type="button" className="btn btn-danger btn-lg" data-toggle="modal" data-target="#myModal">Delete</button>

                        <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Delete Ticket</h4>
                                    </div>
                                    <div className="modal-body">
                                        <div className='text-align-center'>
                                            <button onClick={this.deleteFromCart}
                                                    className='btn btn-danger m-r-1em'>Yes</button>
                                            <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            );
        }.bind(this));

        return (
            !cartTickets.length ? <div className='alert alert-danger'>No tickets found in cart.</div>
                :
                <div className="main">
                    <div className="page">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className='table table-bordered table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Ticket Name</th>
                                                <th>Ticket Description</th>
                                                <th>Ticket Category</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartTickets}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    } //render
});

module.exports = Cart;
