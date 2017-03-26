var React = require('react');

var Tickets = require('./tickets.js');

var Home = React.createClass({
    getInitialState: function () {
      return {
          userOnline: ""
      }
    },

    render: function () {
        return(
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Hello There, {this.state.userOnline}</h1>
                               <Tickets/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;