const React = require('react');

const TicketList = React.createClass({
    render: function() {
        return(
            <tr className="ticket-item media">
                <td>{this.props.ticket.name}</td>
                <td>{this.props.ticket.description}</td>
                <td>€{parseFloat(this.props.ticket.price).toFixed(2)}</td>
                <td>{this.props.ticket.category_name}</td>
                <td>
                    <button type="button" className="ticket-buy btn btn-sm btn-warning" data-toggle="modal" data-target="#myModal" onClick={() => this.addToCart}>
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                    </button>

                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Add to Cart</h4>
                                </div>
                                <div className="modal-body">
                                    <span>Are you sure you want to add this ticket to cart?</span>
                                    <div className='text-align-center'>
                                        <button type="button" onClick={() => this.addToCart}
                                                className='btn btn-success m-r-2em'>Add</button>
                                        <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            /*<li className="ticket-item media">
             <div className="media-left">
             <button className="ticket-buy btn btn-sm btn-warning" onClick={this.addToCart}>
             <span className="glyphicon glyphicon-shopping-cart"></span></button>
             </div>
             <div className="ticket-info media-body">
             <div className="ticket-head">
             <span className="ticket-name">{this.props.ticket.name}</span>
             </div>
             <div className="ticket-price"><span className="label-item">Price: </span>
             €{parseFloat(this.props.ticket.price).toFixed(2)}</div>
             <div className="ticket-desc"><span className="label-item">Description: </span>
             {this.props.ticket.description}</div>
             <div className="ticket-cat"><span className="label-item">Category: </span>
             {this.props.ticket.category_name}</div>
             </div>
             </li>*/
        ) // return
    } // render
}); //TicketList

module.exports = TicketList;
