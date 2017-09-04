import { Segment, Container, Button, Form, Icon } from 'semantic-ui-react';

module.exports = class CreatePoll extends React.Component {
    render() {
        return (
            <Container text style={{
                paddingTop: 75
            }}>
                <Form action="/api/pollEdit" method="POST" enctype="multipart/form-data">
                    <Form.Field width={12}>
                        <label>Poll question</label>
                        <input placeholder='Enter your poll question...' />
                    </Form.Field>
                    <Form.Field width={12}>
                        <label>Option 1</label>
                        <input placeholder='Enter option...' />
                    </Form.Field>
                    <Form.Field width={12}>
                        <label>Option 2</label>
                        <input placeholder='Enter option...' />
                    </Form.Field>
                    <Form.Field width={12}>
                        <label>Option 3</label>
                        <input placeholder='Enter option...' />
                    </Form.Field>
                    <Form.Field width={12}>
                        <label>Option 4</label>
                        <input placeholder='Enter option...' />
                    </Form.Field>
                    <Form.Field width={12}>
                        <label>Option 5</label>
                        <input placeholder='Enter option...' />
                    </Form.Field>                                                            
                    <Button type='submit'>Submit</Button>
                    <Button type='reset'>Reset</Button>
                    <Button icon='plus' color='purple' onClick={(e) => {
                        e.preventDefault();
                        // to do
                    }}>Add more options</Button>
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
