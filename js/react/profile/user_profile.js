const React = require('react');

const UserProfile = React.createClass({
    requireAuth: function () {

    }, //requireAuth

    render: function () {
        return (
            <div className="main">
                <div className="page">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-12">
                                TEST
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = UserProfile;
