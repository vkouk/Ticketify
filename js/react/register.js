var React = require('react');

var Register = React.createClass({
    getInitialState: function () {
      return {
          name: "",
          email: "",
          pswd: ""
      }
    },

    onNameChange: function (e) {
        this.setState({
            name : e.target.value
        })
    }, //onNameChange

    onEmailChange: function (e) {
        this.setState({
            email : e.target.value
        })
    }, //onEmailChange

    onPasswordChange: function (e) {
        this.setState({
            pswd : e.target.value
        })
    }, //onPswdChange

    onRegister: function (e) {
        $.post("./server/registerUser.php", {
                name: this.state.name,
                email: this.state.email,
                pswd: this.state.pswd
            },
            function() {
                this.setState({name: ""});
                this.setState({email: ""});
                this.setState({pswd: ""});
            }.bind(this)
        );
        e.preventDefault();
    }, //onRegister

    render: function () {
        return (
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="register-body">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <form className="register-form" autoComplete="off" onSubmit={this.onRegister}>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-user"></span> </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name={this.state.name}
                                                required
                                                onChange={this.onNameChange}
                                                placeholder="username"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span> </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name={this.state.email}
                                                required
                                                onChange={this.onEmailChange}
                                                placeholder="email"/>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span> </div>
                                            <input
                                                className="form-control"
                                                type="password"
                                                name={this.state.pswd}
                                                required
                                                onChange={this.onPasswordChange}
                                                placeholder="password"/>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                onSubmit={this.onRegister}
                                                className="btn btn-block btn-register">Sign up
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

module.exports = Register;
