var React = require('react');
var validator = require('validator');

function loginValidation(name, pswd) {
    if (!validator.isEmpty(name) && !validator.isEmpty(pswd)) {
        return true;
    }
}

var Login = React.createClass({
    getInitialState: function () {
        return {
            name: "",
            pswd: ""
        }
    },

    onNameChange: function (e) {
        this.setState({
            name : e.target.value
        })
    }, //onNameChange

    onPasswordChange: function (e) {
        this.setState({
            pswd : e.target.value
        })
    }, //onPswdChange

    onLogin: function (e) {
        if (!this.handleOnLogin()) {
            alert("There is something wrong with your name or password.");
            return  e.preventDefault();
        }
        else {
            $.post("./server/loginUser.php", {
                    name: this.state.name,
                    pswd: this.state.pswd
                },
                function () {
                    this.setState({name: ""});
                    this.setState({pswd: ""});
                }.bind(this)
            );
        }
    }, //onLogin

    handleOnLogin: function () {
        return loginValidation(this.state.name, this.state.pswd);
    }, //handleOnLogin
    
    render: function () {
        var errors = loginValidation(this.state.name, this.state.pswd);

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
                                            <input
                                                className={!errors ? "form-error form-control" :"form-control"}
                                                type="text"
                                                required
                                                name={this.state.name}
                                                onChange={this.onNameChange}
                                                placeholder="username"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span> </div>
                                            <input
                                                className={!errors ? "form-error form-control" :"form-control"}
                                                type="password"
                                                required
                                                name={this.state.pswd}
                                                onChange={this.onPasswordChange}
                                                placeholder="password"/>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="btn btn-block btn-login"
                                                onClick={this.onLogin}>Sign in
                                            </button>
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
