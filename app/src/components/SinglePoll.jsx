var Pie = require('react-chartjs-2').Pie;

module.exports = class SinglePoll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
          labels: this.props.labels,
          datasets: [{
              label: '# of Votes',
              data: this.props.data,
              backgroundColor: [
                  "#2DACE3",
                  "#AD78D7",
                  "#FFA000",
                  "#E22879",
                  "#50A82F",
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
                  "#3EBDF4",
                  "#BE89E8",
                  "#FFA833",
                  "#E83999",
                  "#70B94F",
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
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
}
  }

render() {
  console.log(this.props.data)
  return (
    <div>
    <h3>{this.props.question}</h3>
    <Pie data={this.state.data} />
</div>
  )
}
}
