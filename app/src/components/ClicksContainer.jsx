var React = require('react');
var Btn = require('./Btn');
var Header = require('./Header');
var SinglePoll = require('./SinglePoll');

var ajaxRequest = require('../ajax-functions');

var clicksApiUrl = window.location.origin + '/api/:id/clicks';
var pollDataApiUrl = window.location.origin + '/polldata/api';


module.exports = React.createClass({
	getInitialState: function(){
		return {
			res: undefined
		}
	},

	componentDidMount: function () {
	ajaxRequest ('GET', pollDataApiUrl, function(data){
		console.log('1 going to ' + pollDataApiUrl)
		var result = JSON.parse(data);
			this.setState({
				res: result
			})
		}.bind(this))
},

	render(){
    if (this.state) {
			// console.log('2.0', this.state);
			// console.log('2.1', this.state.res.pollInfo);
			// console.log('2.2', this.state.result);
		}
		return (
			<div className="container">
				<Header />
				<p></p>
				<br />
				<div className="polls-container">
					  <SinglePoll data={[1, 2, 3]}
					labels={['a', 'b', 'c']} question={"this.state.res.pollInfo.question || null"}/>
				</div>
			</div>
		)
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
