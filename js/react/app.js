var React = require('react');
var ReactDOM = require('react-dom');
var { BrowserRouter, Route, Link, Switch } = require('react-router-dom');

var Login = require('./login.js');
var Register = require('./register.js');
var Home = require('./home.js');

var TicketAppInterface = React.createClass({
    render: function () {
        return(
            <div>
                <header>
                    <nav className="nav navbar navbar-default" role="navigation">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <p className="ticketify-brand">Ticketify</p>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavBar">
                            <ul className="nav navbar nav-pills menu nav-center">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
});

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={TicketAppInterface}/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('ticketappinterface')
); //render