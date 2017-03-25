var React = require('react');

var LoginForm = React.createClass({
    getInitialState: function () {
        return {
            //todo
        }
    },
    
    render: function () {
        return (
            <div className="row">
                <div className="login-body">
                    <div className="col-sm-12 col-md-10 col-md-offset-1">
                        <form method="post" action="/">
                            <div className="form-group input-group">
                                <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span> </div>
                                <input className="form-control" id="username" type="text" name='username' placeholder="username"/>
                            </div>
                            <div className="form-group input-group">
                                <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span> </div>
                                <input className="form-control" id="pswd" type="password" name='pswd' placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-block btn-login">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = LoginForm;
