const React = require('react');

const UserProfile = React.createClass({
    render: function () {
        //Shows the future feature user's profile.
        return (
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                Hello There, Guest!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = UserProfile;
