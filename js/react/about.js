const React = require('react');

const About = React.createClass({
    render: function() {
        return(
            /* It contains all about page informations. */
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <img src="./images/vkouk-photo.jpg" alt="VKOUK" className="img-responsive img-profile"/>
                            </div>
                            <div className="col-sm-6">
                                <p>Insane love with programming, new web technologies and mostly to front-end. This infected my like a virus in my young childhood where i remember me studying programming for fun, and this is where all started.</p>
                                <br/>
                                <p>As future plan after getting my bachelor degree from University of Derby, is to work as a full stack developer since i love both front and back end.</p>
                                <br/>
                                <p>And last but not least, as a guy in my free time i enjoy hanging out with friends, studying programming and tasing foreign cuisines.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) // return
    } // render
}); //TicketList

module.exports = About;
