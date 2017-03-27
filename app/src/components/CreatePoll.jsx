// this.props.route.user.displayName

module.exports = class CreatePoll extends React.Component {
  render() {
  console.log(this.props.route);
    return (
    <div>
      <h1>Create a poll</h1>
        <form>
          Poll question <br />
          <input type="text" name="pollQuestion" /><br />

          Option 1 <br />
          <input type="text" name="option-1" /><br />

          Option 2 <br />
          <input type="text" name="option-1" /><br />

          Option 3 <br />
          <input type="text" name="option-1" /><br />

          Option 4 <br />
          <input type="text" name="option-1" /><br />

          Option 5 <br />
          <input type="text" name="option-1" /><br />

        </form>
    </div>
      );
  }
}
