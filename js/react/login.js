const React = require('react');

const Login = React.createClass({
    getInitialState: function () {
        return {
            users : [],
            name: "",
            pswd: ""
        }
    },

    componentDidMount: function () {
        this.serverRequest = $.get('./server/fetch_users.php', function(users) {
            this.setState({
                users: JSON.parse(users)
            }); //setState
        }.bind(this));
    }, //componentDidMount

    componentWillUnmount: function () {
        this.serverRequest.abort();
    }, //componentWillUnmount

    onNameChange: function (e) {
        e.target.classList.add('active');

        this.setState({
            name : e.target.value
        });

        this.showInputError(e.target.name);
    }, //onNameChange

    onPasswordChange: function (e) {
        e.target.classList.add('active');

        this.setState({
            pswd : e.target.value
        });

        this.showInputError(e.target.name);
    }, //onPswdChange

    onLogin: function (e) {
        e.preventDefault();

        if (!this.showFormErrors()) {
            return false;
        } else {
            $.post("./server/loginUser.php", {
                    name: this.state.name,
                    pswd: this.state.pswd
                },
                function () {
                    this.setState({name: ""});
                    this.setState({pswd: ""});
                    window.location.href = '/profile';
                }.bind(this)
            );
        }
    }, //onLogin

    validateLoginUser: function () {
        const usernameInput = document.querySelectorAll('input[username]');
        const passwordInput = document.querySelectorAll('input[password]');
        let userExistsInDb = true;

        const checkUserInDb = this.state.users.map(function (user) {
            if (usernameInput !== user.name ||
            passwordInput !== user.pswd) {
                return false;
            }
        }.bind(this));

        if (checkUserInDb) {
            userExistsInDb = false;
        }

        return userExistsInDb;

    }, //validateLoginUser

    showFormErrors: function() {
        const inputs = document.querySelectorAll('input');
        let isFormValid = true;

        inputs.forEach(input => {
            input.classList.add('active');

            const isInputValid = this.showInputError(input.name);

            if (!isInputValid) {
                isFormValid = false;
            }
        });

        return isFormValid;
    }, //showFormErrors

    showInputError: function(refName) {
        const validity = this.refs[refName].validity;
        const label = document.getElementById(`${refName}Label`).textContent;
        const error = document.getElementById(`${refName}Error`);

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (this.validateLoginUser() && validity.customError) {
                error.textContent = `Username or Password is incorrect.`;
            }
            return false;
        }

        error.textContent = '';
        return true;

    }, //showInputError
    
    render: function () {
        return (
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="login-body">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <form className="login-form" onSubmit={this.onLogin} autoComplete="off" noValidate>
                                        <div className="form-group">
                                            <label id="usernameLabel">Username</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="username"
                                                ref="username"
                                                value={this.state.name}
                                                onChange={this.onNameChange}
                                                required />
                                            <div className="error" id="usernameError" />
                                        </div>
                                        <div className="form-group">
                                            <label id="passwordLabel">Password</label>
                                            <input
                                                className="form-control"
                                                type="password"
                                                name="password"
                                                ref="password"
                                                value={this.state.pswd}
                                                onChange={this.onPasswordChange}
                                                required />
                                            <div className="error" id="passwordError" />
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
