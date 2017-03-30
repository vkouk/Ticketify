var React = require('react');

var BuyTicket = require('./buy_ticket.js');
var CreateTicket = require('./create_ticket.js');

var Home = React.createClass({
    getInitialState: function() {
        return {
            createBodyVisible : false
        };
    }, //getInitialState

    toggleAddDisplay: function() {
        var tempVisibility = !this.state.createBodyVisible;
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