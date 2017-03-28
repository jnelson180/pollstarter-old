var React = require('react');
var Btn = require('./Btn');
var Header = require('./Header');
var SinglePoll = require('./SinglePoll');

var ajaxRequest = require('../ajax-functions');

var clicksApiUrl = window.location.origin + '/api/:id/clicks';


module.exports = React.createClass({
	getInitialState: function(){
		return {
			clicks: undefined
		}
	},
	componentWillMount: function () {
	/*	ajaxRequest ('GET', clicksApiUrl, function(data){
			this.setState({
				clicks: JSON.parse(data).clicks
			})
		}.bind(this)) */
	},

	render: function() {
		return (
			<div className="container">
				<Header />
				<p></p>
				<br />
				<div className="polls-container">
				  <SinglePoll />
				</div>
			</div>
		)
	},

	getPollData: function() {
		// ajaxRequest('GET', '/api/')
	},

	handleAddClick: function() {
		ajaxRequest ('POST', clicksApiUrl, function(data){
			console.log(data);
			this.setState({clicks: JSON.parse(data).clicks})
		}.bind(this))
	},

	handleDeleteClick: function () {
		ajaxRequest ('DELETE', clicksApiUrl, function(data){
			console.log('delete');
			this.setState({clicks: JSON.parse(data).clicks})
		}.bind(this))
	}
});
