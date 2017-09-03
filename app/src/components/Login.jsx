var React = require('react');

module.exports = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="login">
                    <img src="public/img/pie-icon.svg" className="img-200" />
                    <br />
                    <p className="pollstarter-text">Pollstarter</p>
                    <a href="/auth/github/callback">
                        <div className="btn" id="login-btn">
                            <img src="public/img/github_32px.png" alt="github logo" />
                            <p>Login with GitHub</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
})
