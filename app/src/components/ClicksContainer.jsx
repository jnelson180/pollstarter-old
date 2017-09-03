
var React = require('react');
var Btn = require('./Btn');
var Header = require('./Header');
var SinglePoll = require('./SinglePoll');
var ajaxRequest = require('../ajax-functions');
import { Grid, Segment } from 'semantic-ui-react';

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
            let resLength = this.state.res.length;
            let rows = Math.ceil(this.state.res.length / 3);
            let index = 0;
            return (
                <div style={{
                    position: 'relative',
                    margin: '100px 50px 50px 50px'
                }}>
                    <Grid columns={3} doubling stackable>
                        {this.state.res.map((poll, index) => {
                            return (
                                <Grid.Column>
                                    <Segment style={{
                                        boxShadow: '6px 10px 35px -10px rgba(0,0,0,0.75)'
                                    }}>
                                        <SinglePoll data={poll.pollInfo.votes} 
                                            labels={poll.pollInfo.values} 
                                            question={poll.pollInfo.question} 
                                            id={poll._id}/>
                                    </Segment>
                                </Grid.Column>
                            )
                        })}
                    </Grid>
                </div>
            );
        } else {
            return (
                <div>
                    <Header/>
                    <p></p>
                    <br/>
                    <div>Loading...</div>
                </div>
            )
        }
    }
}
