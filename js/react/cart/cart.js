const React = require('react');
const _ = require('lodash');

const Cart = React.createClass({
    getInitialState: function () {
        return {
          cartTickets : []
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

    addToCart: function (e) {
        e.preventDefault();
        
        $.ajax({
           type: 'post',
            url: './server/addToCart.php',
            data: {
               
            },
            success: function (re) {
                document.get("totalCartTickets").value = re;
            }
        });
        
    }, //addToCart

    deleteFromCart: function (e) {
        e.preventDefault();

        $.ajax({
            type: 'post',
            url: './server/deleteFromCart.php',
            data: {
                cartTickets: "totalCartTickets"
            },
            success: function (re) {
                document.get("totalCartTickets").value = re;
            }
        });
    }, //deleteFromCart

    render: function () {
        let cartTickets = this.state.cartTickets.map(function(cartItem, index) {
            return (
                <tr key={index}>
                    <td>{cartItem.ticket_name}</td>
                    <td>{cartItem.ticket_description}</td>
                    <td>{cartItem.cat_name}</td>
                    <td>
                        <a
                            onClick={this.deleteFromCart}
                            className='btn btn-danger'> Delete
                        </a>
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
