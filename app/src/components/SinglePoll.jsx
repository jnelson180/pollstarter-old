var Pie = require('react-chartjs-2').Pie;
var ajaxRequest = require('../ajax-functions');
var voteUrl = window.location.origin + '/pollData/vote';


module.exports = class SinglePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: this.props.data,
      data: {
          labels: this.props.labels,
          datasets: [{
              label: '# of Votes',
              data: this.props.data,
              backgroundColor: [
                  "#DF2428",
                  "#2AA5DE",
                  "#68B12C",
                  "#E93D87",
                  "#F5B027",
                  "#3471db",
                  "#f1c40f",
                  "#2ecc71",
                  "#e74c3c",
                  "#2c3e50",
                  "#9E9E9E",
                  "#CDDC39",
                  "#E91E63",
                  "#9C27B0",
                  "#00BCD4",
                  "#FFEB3B",
                  "#FF5722",
                  "#8BC34A"
              ],
              hoverBackgroundColor: [
                  "#EF2539",
                  "#3BB6EF",
                  "#79C23D",
                  "#FA4E98",
                  "#F6C138",
                  "#4582ec",
                  "#e2d51e",
                  "#3edd82",
                  "#e85d3d",
                  "#3d4f61",
                  "#BEBEBE",
                  "#DEED50",
                  "#FA2F74",
                  "#AD38CA",
                  "#11CDE5",
                  "#FFEC4C",
                  "#FF6833",
                  "#9CD45B"

            ],
              borderColor: [
                  'rgba(255,255,255,1)',
                  'rgba(255, 255, 255, 1)',
                  'rgba(255, 255, 255, 1)',
                  'rgba(255, 255, 255, 1)',
                  'rgba(255, 255, 255, 1)',
                  'rgba(255, 255, 255, 1)'
              ],
              borderWidth: 1.5
          }]
      },
      options: {
        legend: {
    display: true,
    labels: {
        fontColor: 'rgb(255, 0, 132)'
          }
        },

        title: {
          display: true,
          text: 'question',
          position: 'top',
        },
        onClick: { function(evt){
          console.log('hi');
            var activePoints = myLineChart.getElementsAtEvent(evt);
            // => activePoints is an array of points on the canvas that are at the same position as the click event.
            console.log(activePoints);
          }
          },
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      },

      onElementsClick: function(elems) {
        // console.log('elems is: ');
        // console.log(elems);
        console.log('clicked element at index', elems[0]["_index"], elems[0]._chart.config.data.labels[(elems[0]._index)]);
        var choice = elems[0]["_index"];
        var id = this.props.id;
        var curVoteUrl = voteUrl + "/" + id + "/" + choice;
       //  console.log(this.state.data.datasets[0].data);
        // this.state.data.datasets[0].data[elems[0]["_index"]] = this.state.data.datasets[0].data[elems[0]["_index"]] + 1;

        ajaxRequest('POST', curVoteUrl, function(data) {
            console.log('1 being added to ' + curVoteUrl)
            var result = JSON.parse(data);
            console.log(result);
            console.log('before update this.state.data is', this.state.data);
            this.state.data.datasets[0].data = result.pollInfo.votes;
            console.log('this state data is now ');
            console.log(this.state);
            this.render();
        }.bind(this))

      }.bind(this)
// => returns the first element at the event point.
}
  }

render() {
  // console.log(this.props.data)
  console.log('this.state.votes is ', this.state.votes);
  console.log('this.state.data is ', this.state.data);
  return (
    <div>
    <p className = "SinglePoll-question">{this.props.question}</p>
    <Pie data={this.state.data} getElementAtEvent={this.state.onElementsClick} />
</div>
  )
};
}
