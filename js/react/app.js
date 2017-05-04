const React = require('react');
const ReactDOM = require('react-dom');
const { BrowserRouter, Route, Link, Switch, BrowserHistory } = require('react-router-dom');

const Login = require('./login.js');
const Register = require('./register.js');
const Home = require('./home.js');
const UserProfile = require('./profile/user_profile.js');
const About = require('./about.js');
const Cart = require('./cart/cart.js');

const TicketAppInterface = React.createClass({
    render: function() {
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
                                <img src="./images/logo.png" alt="ticketify" className="img-responsive ticketify-brand"/>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavBar">
                            <ul className="nav navbar nav-pills menu nav-center">
                                <li><Link to="/"><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                                <li><Link to="/about"><span className="glyphicon glyphicon-tag"></span> About</Link></li>
                                <ul className="nav navbar nav-pills menu navbar-right">
                                    <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                                    <li><Link to="/register"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                                    <li><Link to="/cart"><span className="glyphicon glyphicon-shopping-cart">Cart </span> <span id="totalCartTickets"> </span></Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                </ul>
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
            <Route history={BrowserHistory} component={TicketAppInterface}/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={UserProfile}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/about" component={About}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>,
    document.getElementById('ticketappinterface')
); //render