var React = require('react');

var Login = React.createClass({
    getInitialState: function () {
        return {
            user_data: []
        }
    },

    componentDidMount: function() {
        this.serverRequest = $.get('./server/loginUser.php', function(user_data) {
            this.setState({
                user_data: JSON.parse(user_data)
            }); //setState
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    onLogin: function () {
        //toodooo
    }, //onLogin
    
    render: function () {
        return (
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="login-body">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <form className="login-form" onSubmit={this.onLogin} autoComplete="off">
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span> </div>
                                            <input className="form-control" id="name" type="text" name={this.state.name} placeholder="username"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span> </div>
                                            <input className="form-control" id="pswd" type="password" name={this.state.pswd} placeholder="password"/>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-block btn-login" onClick={this.onLogin}>Sign in</button>
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
