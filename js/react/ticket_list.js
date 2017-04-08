const React = require('react');

const TicketList = React.createClass({

    render: function() {
        return(
            <li className="ticket-item media">
                <div className="ticket-info media-body">
                    <div className="ticket-head">
                        <span className="ticket-name">{this.props.ticket.name}</span>
                    </div>
                    <div className="ticket-price"><span className="label-item">Price </span>
                        €{parseFloat(this.props.ticket.price).toFixed(2)}</div>
                    <div className="ticket-desc">{this.props.ticket.description}</div>
                </div>
            </li>
        ) // return
    } // render
}); //TicketList

module.exports = TicketList;
