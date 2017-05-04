const React = require('react');

const Cart = React.createClass({
    getInitialState: function () {
        return {
            cartTickets : [],
            tickets: [],
            t_name : "",
            t_description : "",
            t_id : 0,
            t_category_id : 0,
            t_category_name : '',
            t_price : 0
        };
    }, //getInitialState

    componentDidMount: function () {
        this.serverRequest = $.get('./server/displayCart.php', function(cart) {
            this.setState({
                cartTickets : JSON.parse(cart)
            });
        }.bind(this));

        this.serverRequestTickets = $.get("./server/display_tickets.php",function (tickets) {
            this.setState({
                tickets: JSON.parse(tickets)
            });
        }.bind(this));

        let ticketId = this.state.tickets.id;

        this.serverRequestTicket = $.post("./server/readTicket.php",
            {ticket_id : ticketId},
            function (ticket) {
                let t = JSON.parse(ticket)[0];
                this.setState({t_name : t.name});
                this.setState({t_description : t.description});
                this.setState({t_category_name : t.category_name});
                this.setState({t_id : t.id});
                this.setState({t_price : t.price});
            }.bind(this));

        document.getElementById('totalCartTickets').innerHTML = this.state.cartTickets.length.toString();
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
        this.serverRequestTickets.abort();
        this.serverRequestTicket.abort();
    }, //componentWillUnmount

    addToCart: function () {
        $.post("./server/addToCart.php", {
                t_name: this.state.t_name,
                t_description: this.state.t_description,
                t_id: this.state.t_id,
                t_category_id: this.state.t_category_id
            },
            function(){
                alert('Ticket Added to cart');
                window.href = '/cart';
            }.bind(this));
        alert('button clicked');
    }, //addToCart

    deleteFromCart: function () {
        let cartID = this.state.cartTickets.cart_id;

        $.post("./server/deleteFromCart.php", {
                del_ids: [cartID]
            },
            function () {
                console.log("Deleted");
        }.bind(this));
    }, //deleteFromCart

    render: function () {
        let cartTickets = this.state.cartTickets.map(function(cartItem, index) {
            return (
                <tr key={index} onClick={() => this.deleteFromCart}>
                    <td>{cartItem.ticket_name}</td>
                    <td>{cartItem.ticket_description}</td>
                    <td>€{parseFloat(cartItem.ticket_price).toFixed(2)}</td>
                    <td>{cartItem.cat_name}</td>
                    <td>
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
                                            <button type="button" onClick={() => this.deleteFromCart}
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
                                                <th>Ticket Price</th>
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
