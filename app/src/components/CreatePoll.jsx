// this.props.route.user.displayName


module.exports = class CreatePoll extends React.Component {
  render() {
  console.log(this.props.route);
    return (
    <div id="pollCreateContainer">
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
    </div>
      );
  }
}
