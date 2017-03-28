var LineChart = require("react-chartjs").Line;

module.exports = class SinglePoll extends React.Component {

  var data = {
  labels: [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4",
      "Option 5",
  ],
  datasets: [
      {
          data: [300, 50, 100, 140, 75, 88, 120, 39, 65, 50, 100],
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
              "#2DACE3",
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

        ]
      }]
};

var options = {};

render: function() {
  return <LineChart data={data} options={options} width="600" height="250"/>
}
}
