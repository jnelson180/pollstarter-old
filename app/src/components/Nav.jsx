var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var Logo = require('./Logo');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <div>
                        <p>Welcome, <span>{this.props.user.displayName}</span>!</p>
                        <Link className="menu" to={"/"}>Home</Link>
                        <p>|</p>
                        <Link className="menu" to={"/createPoll"}>Create Poll</Link>
                        <p>|</p>
                        <Link className="menu" to={"/managePoll"}>Manage Polls</Link>
                        <p>|</p>
                        <Link className="menu" to={"/profile"}>Profile</Link>
                        <p>|</p>
                        <a className="menu" href="/logout">Logout</a>
                    </div>
                    <Logo />
                </header>
            </div>
        )
    }
});
