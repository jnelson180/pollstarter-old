import { Segment, Container, Button, Form, Icon } from 'semantic-ui-react';
import update from 'immutability-helper';

module.exports = class CreatePoll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [1, 2, 3, 4, 5]
        }
    }

    render() {
        return (
            <Container text style={{
                paddingTop: 100
            }}>
                <Form action="/api/pollEdit" method="POST" encType="multipart/form-data">
                    <Form.Field width={12}>
                        <label>Poll question</label>
                        <input type="text" placeholder='Enter your poll question...' />
                    </Form.Field>
                    { this.state.options.map((o, i) => {
                        return (
                            <Form.Field width={12} key={i}>
                                <label>Option {o}</label>
                                <input type="text" placeholder='Enter option...' />
                            </Form.Field>      
                        );
                    })}
                    <Button type='submit'>Submit</Button>
                    <Button type='reset'>Reset</Button>
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
