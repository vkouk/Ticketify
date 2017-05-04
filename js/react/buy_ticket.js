const React = require('react');
const _ = require('lodash');

const TicketList = require('./ticket_list.js');
const SearchTicket = require('./search_ticket.js');

const BuyTicket = React.createClass({
    getInitialState: function() {
        return {
            orderBy: 'name',
            orderDir: 'asc',
            queryText: '',
            tickets: []
        };
    }, //getInitialState

    componentDidMount: function() {
        //It get's dynamically all tickets which are stored in database with JSON.
        this.serverRequest = $.get("./server/display_tickets.php",function (tickets) {
            this.setState({
                tickets: JSON.parse(tickets)
            });
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        //On exit destroys the mount(react thing).
        this.serverRequest.abort();
    }, //componentWillUnmount

    //On exit destroys the mount(react thing).
    reOrder: function (orderBy, orderDir) {
        this.setState({
            orderBy: orderBy,
            orderDir: orderDir
        });
    }, //reOrder

    //useful functions for autcomplete web service.
    queryTickets: function (query) {
        this.setState({
           queryText: query
        });
    }, //queryTickets

    render: function () {
        let filteredTickets = [];
        const orderBy = this.state.orderBy;
        const orderDir = this.state.orderDir;
        const queryText = this.state.queryText;
        const myTickets = this.state.tickets;

        myTickets.forEach(function(ticket) {
            if (
                (ticket.name.toLowerCase().indexOf(queryText) !== -1) ||
                (parseFloat(ticket.price).toFixed(2).indexOf(queryText) !== -1)
            ) {
                filteredTickets.push(ticket);
            }
        }); //forEach

        //Ordering tickets depending on name or price.
        filteredTickets = _.orderBy(filteredTickets, function (ticket) {
            return ticket[orderBy];
        }, orderDir);

        filteredTickets = filteredTickets.map(function(ticket, index) {
            return(
                <TicketList key = {index}
                    ticket = {ticket}
                />
            ); // return;
        }.bind(this));

        return (
            //Shows if there available tickets or not.And shows also the search engine.
            !myTickets.length
                ?  <div className='alert alert-danger'>No tickets found.</div>
            :
            <div>
                <SearchTicket
                    orderBy = {this.state.orderBy}
                    orderDir = {this.state.orderDir}
                    onReOrder = {this.reOrder}
                    onSearch = {this.queryTickets}
                />

                <form onSubmit={() => this.addToCart}>
                    <table className='ticket-list media-list table'>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Category</th>
                            <th>Cart</th>
                        </tr>
                        </thead>
                        <tbody>
                        {filteredTickets}
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
});

module.exports = BuyTicket;
