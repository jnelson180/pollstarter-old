var React = require('react');
import { Button, Card, Image, Grid, Header, Segment , Message, Icon } from 'semantic-ui-react'

module.exports = class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100vw',
                height: '100vh'
            }}>
                <Grid
                    textAlign='center'
                    style={{ height: '100%' }}
                    verticalAlign='middle'
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as='h1' color='teal' textAlign='center'>
                            <Image src='public/img/pie-icon.svg' size='small' />
                            {' '}Pollstarter
                        </Header>
                        <Button color='purple' size='small'>
                            <a href='/auth/github/callback' style={{ color: '#fff' }}>
                                <Icon name="github alternate" />
                                Login with GitHub
                            </a>
                        </Button>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}
