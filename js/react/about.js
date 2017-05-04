const React = require('react');

const About = React.createClass({
    render: function() {
        return(
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="./images/vkouk-photo.jpg" alt="VKOUK" className="img-responsive img-profile"/>
                            </div>
                            <div className="col-sm-6">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus dolores eius enim est expedita fugit ipsa iste, iure minima natus, nobis nulla quas quasi repellendus reprehenderit saepe sed sunt voluptate!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) // return
    } // render
}); //TicketList

module.exports = About;
