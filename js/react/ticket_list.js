const React = require('react');

const TicketList = React.createClass({

    render: function() {
        return(
            <li className="ticket-item media">
                <div className="media-left">
                    <button className="ticket-buy btn btn-sm btn-warning" onClick="">
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
            </li>
        ) // return
    } // render
}); //TicketList

module.exports = TicketList;
