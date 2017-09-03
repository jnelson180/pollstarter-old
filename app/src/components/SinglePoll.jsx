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

                    borderWidth: 3,
                }]
            },
            options: {
                legend: {
                    display: true,
                    position: 'top',
                    padding: 20,
                    labels: {
                        fontColor: '#EEE'
                    }
                },

                title: {
                    display: true,
                    position: 'top',
                    fullWidth: true,
                    fontSize: 18,
                    fontColor: '#EEE',
                    fontStyle: 'bold',
                    text: this.props.question,
                    padding: 20,

                },

                tooltips: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleFontSize: 14,
                    titleSpacing: 8,
                    titleMarginBottom: 12,
                    bodySpacing: 6,
                    bodyFontSize: 16,
                },
                maintainAspectRatio: false,
            },

            onClick: {
                function(evt) {
                    console.log('this: ', this);
                    var activePoints = Pie.getElementsAtEvent(evt);
                    // => activePoints is an array of points on the canvas that are at the same position as the click event.
                    console.log('activePoints: ', activePoints);
                }
            },
            onElementsClick: function (elems) {
                var choice = elems[0]["_index"];
                var id = this.props.id;
                var curVoteUrl = voteUrl + "/" + id + "/" + choice;
                // this.state.data.datasets[0].data[elems[0]["_index"]] = this.state.data.datasets[0].data[elems[0]["_index"]] + 1;

                ajaxRequest('POST', curVoteUrl, function (data) {
                    var result = JSON.parse(data);
                    this.state.data.datasets[0].data = result.pollInfo.votes;
                    this.setState({ 'votes': result.pollInfo.votes });
                }.bind(this))
            }.bind(this)
            // => returns the first element at the event point.
        }
    }

    render() {
        return (
            <Pie 
                data={this.state.data} 
                getElementAtEvent={this.state.onElementsClick} 
                options={this.state.options} 
                width={400} 
                height={400} />
        )
    };
}
