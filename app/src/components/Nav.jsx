var React = require('react');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var Link = require('react-router').Link;
var Logo = require('./Logo');
import { Menu, Container, Image, Dropdown } from 'semantic-ui-react';

module.exports = React.createClass({
    render: function () {
        return (
            <Menu fixed='top' inverted>
                <Container>
                    <Menu.Item as='a' header>
                    <Image
                        size='mini'
                        src='../../public/img/pollstarter-50.png'
                        style={{ marginRight: '1.5em' }}
                    />
                    Pollstarter
                    </Menu.Item>
                    <Menu.Item>
                        <Link className="menu" to={"/"}>Home</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link className="menu" to={"/createPoll"}>Create Poll</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link className="menu" to={"/managePoll"}>Manage Polls</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link className="menu" to={"/profile"}>Profile</Link>
                    </Menu.Item>             
                    <Menu.Item>
                        <a className="menu" href="/logout">Logout</a>
                    </Menu.Item>                                                      
                </Container>
            </Menu>            
        )
    }
});
