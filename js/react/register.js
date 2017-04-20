const React = require('react');

const Register = React.createClass({
    getInitialState: function () {
        return {
            users: [],
            name: "",
            email: "",
            pswd: ""
        }
    },

    onNameChange: function (e) {
        e.target.classList.add('active');

        this.setState({
            name : e.target.value
        });

        this.showInputError(e.target.name);
    }, //onNameChange

    onEmailChange: function (e) {
        e.target.classList.add('active');

        this.setState({
            email : e.target.value
        });

        this.showInputError(e.target.name);
    }, //onEmailChange

    onPasswordChange: function (e) {
        e.target.classList.add('active');

        this.setState({
            pswd : e.target.value
        });

        this.showInputError(e.target.name);
    }, //onPswdChange

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

    onRegister: function (e) {
        e.preventDefault();

        if (!this.showFormErrors()) {
            return false;
        } else {
            $.post("./server/registerUser.php", {
                    name: this.state.name,
                    email: this.state.email,
                    pswd: this.state.pswd
                },
                function () {
                    this.setState({name: ""});
                    this.setState({email: ""});
                    this.setState({pswd: ""});
                    document.getElementById('successForm').innerHTML = '<p>Thanks for your registration.</p>';
                }.bind(this)
            );
        }
    }, //onRegister

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
        const isEmail = refName === 'email';
        const isPassword = refName === 'password';
        //UNDER DEVELOPMENT
        /*const usernameInput = refName === 'username';
        let isRegistered = false;

        const exists = this.state.users.map(function(users) {
            if ((usernameInput === users.name) ||
                (isEmail === users.email)) {
                isRegistered = true;
            }
            return isRegistered;
        }.bind(this));

        if (!exists) {
            isRegistered = false;
        }*/

        if (!validity.valid) {
            if (validity.valueMissing) {
                error.textContent = `${label} is a required field`;
            } else if (isEmail && validity.typeMismatch) {
                error.textContent = `${label} should be a valid email address`;
            } else if (isPassword && validity.patternMismatch) {
                error.textContent = `${label} should be longer than 4 chars`;
            } /*else if (!isRegistered && validity.customError) {
                error.textContent = `${label} is already registered.`;
            }*/
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
                            <div className="register-body">
                                <div className="col-sm-12 col-md-10 col-md-offset-1">
                                    <form className="register-form" autoComplete="off" onSubmit={this.onRegister} noValidate>
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
                                            <label id="emailLabel">Email</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                ref="email"
                                                value={this.state.email}
                                                onChange={this.onEmailChange}
                                                required />
                                            <div className="error" id="emailError" />
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
                                                onSubmit={this.onRegister}
                                                className="btn btn-block btn-register">Sign up
                                            </button>
                                        </div>
                                        <div className="success" id="successForm" />
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