


module.exports = class CreatePoll extends React.Component {
  render() {
  console.log(this.props.route);
    return (
    <div>
      <h1>Create a poll</h1>
      <p>Let's create a poll, {this.props.route.user.displayName}!</p>
    </div>
      );
  }
}
