
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
            var result = JSON.parse(data);
            this.setState({res: result});
        }.bind(this))
    }

    render() {
        if (this.state.res) {
            return (
                <div className="container">
                    { this.state.res.map((poll, index) => (
                            <div className="polls-container">
                                <SinglePoll data={poll.pollInfo.votes} 
                                    labels={poll.pollInfo.values} 
                                    question={poll.pollInfo.question} 
                                    id={poll._id}/>
                            </div>))}
                </div>
            );
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
}
