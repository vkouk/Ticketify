var React = require('react');

var Register = React.createClass({
    getInitialState: function () {
      return {
        name: "",
        pswd: "",
        email: ""
      }
    },

    componentDidMount: function() {
        this.serverRequest = $.get('http://localhost:8888/Ticketify/server/registerUser.php', function(uname, umail, upass) {
            this.setState({
                name: JSON.parse(uname),
                email: JSON.parse(umail),
                pswd: JSON.parse(upass)
            }); //setState
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    render: function () {
        return (
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="register-body">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <form className="register-form" method="post" action="http://localhost:8888/Ticketify/server/registerUser.php" autoComplete="off">
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span> </div>
                                            <input className="form-control" id="username" type="text" name={this.state.username} placeholder="username"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span> </div>
                                            <input className="form-control" id="pswd" type="password" name={this.state.pswd} placeholder="password"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span> </div>
                                            <input className="form-control" id="email" type="text" name={this.state.email} placeholder="email"/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-block btn-register">Sign up</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Register;
