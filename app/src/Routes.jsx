var React = require('react');
import Login from './components/Login';
var ClicksContainer = require('./components/ClicksContainer');
var Main = require('./components/Main');
var Profile = require('./components/Profile');
var CreatePoll = require('./components/CreatePoll');
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, IndexRoute, Link } from 'react-router-dom';
import createBrowserHistory from 'history';

const newHistory = createBrowserHistory();

module.exports = React.createClass({
    requireLogin: function (nextState, replaceState) {
        if (!this.props.user) {
            replaceState({ nextPathname: nextState.location.pathname }, '/Login')
        }
    },
    render: function () {
        return (
            <Router history={newHistory}>
                <Route path="/" component={Main} onEnter={this.requireLogin} user={this.props.user}>
                    <div id="top">
                        <IndexRoute component={ClicksContainer} />
                        <Route path="/Profile" component={Profile} user={this.props.user} />
                        <Route path='/createPoll' render={(props) => (
                            <CreatePoll {...props} user={this.props.user}/>
                        )}/>
                    </div>
                </Route>
                <Route path="/Login" component={Login} />
            </Router>
        )
    }
})
