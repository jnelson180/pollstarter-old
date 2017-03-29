var React = require('react');
var Btn = require('./Btn');
var Header = require('./Header');
var SinglePoll = require('./SinglePoll');

var ajaxRequest = require('../ajax-functions');

var clicksApiUrl = window.location.origin + '/api/:id/clicks';
var pollDataApiUrl = window.location.origin + '/polldata/api';

module.exports = class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            res: undefined
        };
    }

    componentDidMount() {
        ajaxRequest('GET', pollDataApiUrl, function(data) {
            console.log('1 going to ' + pollDataApiUrl)
            var result = JSON.parse(data);
            this.setState({res: result})
        }.bind(this))
    }

    render() {
        if (this.state.res) {
            console.log(this.state.res.pollInfo);

            return (

                <div className="container">
                    <Header/>
                    <p></p>
                    <br/>
                    <div className="polls-container">
                        <SinglePoll data={this.state.res.pollInfo.votes} labels={this.state.res.pollInfo.values} question={this.state.res.pollInfo.question}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <Header/>
                    <p></p>
                    <br/>
                    <div className="polls-container"></div>
                </div>
            )
        }
    }

    /*
		handleAddClick() {
			ajaxRequest ('POST', clicksApiUrl, function(data){
				console.log(data);
				this.setState({clicks: JSON.parse(data).clicks})
			}.bind(this))
		}

		handleDeleteClick() {
			ajaxRequest ('DELETE', clicksApiUrl, function(data){
				console.log('delete');
				this.setState({clicks: JSON.parse(data).clicks})
			}.bind(this))
		}
	*/
}
