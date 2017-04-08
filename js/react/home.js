const React = require('react');

const BuyTicket = require('./buy_ticket.js');
const CreateTicket = require('./create_ticket.js');

const Home = React.createClass({
    getInitialState: function() {
        return {
            createBodyVisible : false
        };
    }, //getInitialState

    toggleAddDisplay: function() {
        const tempVisibility = !this.state.createBodyVisible;
        this.setState({
            createBodyVisible: tempVisibility
        }); //setState
    }, //toggleAddDisplay

    render: function () {
        return(
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                               <BuyTicket/>

                                <CreateTicket
                                    bodyVisible = {this.state.createBodyVisible}
                                    handleToggle = {this.toggleAddDisplay}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;