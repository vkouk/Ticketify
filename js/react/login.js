var React = require('react');

var Login = React.createClass({
    getInitialState: function () {
        return {
            username: "",
            password: ""
        }
    },

    componentDidMount: function() {
        this.serverRequest = $.get('server/loginUser.php', function(usr, pswd) {
            this.setState({
                username: JSON.parse(usr),
                password: JSON.parse(pswd)
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
                            <div className="login-form">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <form method="post" action="server/loginUser.php" autoComplete="off">
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span> </div>
                                            <input className="form-control" id="username" type="text" name='username' placeholder="username"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span> </div>
                                            <input className="form-control" id="pswd" type="password" name='pswd' placeholder="password"/>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-block btn-login">Sign in</button>
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

module.exports = Login;
