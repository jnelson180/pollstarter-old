var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({
	render: function () {
		return (
			<div className="github-profile">
				<img src="/public/img/gh-mark-32px.png" alt="github logo" />
				<p className="blue-text"><span>ID: </span><span id="profile-id" className="profile-value">{this.props.route.user.id}</span></p>
				<p className="green-text"><span>Username: </span><span id="profile-username" className="profile-value">{this.props.route.user.username}</span></p>
				<p className="purple-text"><span>Display Name: </span><span id="display-name" className="profile-value">{this.props.route.user.displayName}</span></p>
				<p className="orange-text"><span>Repositories: </span><span id="profile-repos" className="profile-value">{this.props.route.user.publicRepos}</span></p>
				<Link className="menu" to={"/"}>Home</Link>
				<p id="menu-divide">|</p>
				<a className="menu" href="/logout">Logout</a>
			</div>
		)
	}
})
