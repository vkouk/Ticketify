var React = require('react');

var CreateTicket = require('./create_ticket.js');

var Home = React.createClass({
    render: function () {
        return(
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                               <CreateTicket/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;