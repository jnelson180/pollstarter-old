import { Card, Icon, Image } from 'semantic-ui-react';


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
            console.log('request going to ' + pollDataApiUrl)
            console.log('data: ', data);
            var result = JSON.parse(data);
            console.log('result: ', result);
            this.setState({res: result});
        }.bind(this))
    }

    render() {
         if (this.state.res) {
            // console.log('in clickscontainer.jsx, pollinfo is');
            // console.log(this.state.res.pollInfo);
            // console.log(this.state.res._id);
            console.log('res length: ', this.state.res.length);
            console.log(this.state.res);

            return (
                <div className="container">

                    { this.state.res.map((poll, index) => (

                        <Card>
                            <div className="polls-container">
                                <SinglePoll data={poll.pollInfo.votes} labels={poll.pollInfo.values} question={poll.pollInfo.question} id={poll._id}/></div>
                                <Card.Content>
                                    <Card.Header>
                                        Test Header
                                    </Card.Header>
                                    Some test text.
                                </Card.Content>
                        </Card>
                          
                    )

                )}
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
