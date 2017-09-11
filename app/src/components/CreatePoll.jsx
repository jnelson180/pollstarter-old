import { Segment, Container, Button, Form, Icon } from 'semantic-ui-react';
import update from 'immutability-helper';

module.exports = class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [1, 2, 3, 4, 5],
            form: {
                question: "",
                option1: "",
                option2: "",
                option3: "",
                option4: "",
                option5: "",
                option6: "",
                option7: "",
                option8: "",
                option9: "",
                option10: ""
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit() {
        // /api/pollEdit POST
        // url (required), options (optional)
        fetch('/api/pollEdit', {
            method: 'POST',
            body: new FormData(this.state.form)
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err)
        });
    }

    handleChange(event) {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        this.setState((prevState) => {
            return update(prevState, {
                form: {
                    [name]: {
                        $set: value
                    }
                }
            });
        });
    }

    render() {
        console.log(this.props.user);
        return (
            <Container text style={{
                paddingTop: 100
            }}>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Field width={12}>
                        <label>Poll question</label>
                        <input name="pollQuestion" type="text" placeholder='Enter your poll question...' onChange={this.handleChange} />
                    </Form.Field>
                    { this.state.options.map((o, i) => {
                        return (
                            <Form.Field width={12} key={i}>
                                <label>Option {o}</label>
                                <input name={"option" + o}type="text" placeholder='Enter option...'  onChange={this.handleChange} />
                            </Form.Field>      
                        );
                    })}
                    <Button type='submit'>Submit</Button>
                    <Button type='reset'>Reset</Button>
                    { this.state.options.length < 10 ?
                    <Button icon='plus' color='purple' onClick={(e) => {
                        e.preventDefault();
                        let ops = this.state.options;
                        this.setState((prevState) => {
                            return update(prevState, {
                                options: {
                                    $push: [(ops[ops.length - 1]) + 1]
                                }
                            });
                        });
                    }}>Add option</Button>
                    : null}
                </Form>                
            </Container>

            /*<div id="pollCreateContainer">
                <div id="pollCreate">
                    <h1>Create a poll</h1>
                    <form action="/api/pollEdit" method="POST" enctype="multipart/form-data">
                        Poll question <br />
                        <input type="text" name="pollQuestion" /><br />

                        Option 1 <br />
                        <input type="text" name="option1" /><br />

                        Option 2 <br />
                        <input type="text" name="option2" /><br />

                        Option 3 <br />
                        <input type="text" name="option3" /><br />

                        Option 4 <br />
                        <input type="text" name="option4" /><br />

                        Option 5 <br />
                        <input type="text" name="option5" /><br />

                        <input type="submit" value="Submit" />
                        <input type="reset" />
                    </form>
                </div>
            </div>*/
        );
    }
}
