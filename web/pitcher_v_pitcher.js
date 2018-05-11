var pitcher1Selector = document.getElementById("pitcher1");
var pitcher2Selector = document.getElementById("pitcher2");
var eloChart;

window.onload = function () {
  eloChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [16, 32, 48, 64, 80, 96, 112, 128, 144, 162],
      datasets: [{ 
          borderColor: "#3e95cd",
          fill: false
        }, { 
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: "Pitcher vs. Pitcher"
      }, 
      scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Normalized ELO Rating'
      }
    }], 
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: 'Number of Games into the Season'
      }
    }]
  }
    }
  });
}


function updateChart() {
  var value1 = pitcher1Selector.options[pitcher1Selector.selectedIndex].getAttribute('value');
  var value2 = pitcher2Selector.options[pitcher2Selector.selectedIndex].getAttribute('value');

  var pitcher1_result
  var pitcher2_result


  for (var i = 0; i < pitcher_obj.length; i++){
    if (pitcher_obj[i].name == value1){
      pitcher1_result = pitcher_obj[i].norm_elo
    }

    if (pitcher_obj[i].name == value2){
      pitcher2_result = pitcher_obj[i].norm_elo
    }
  }  
  eloChart.data.datasets[0].data = pitcher1_result;
  eloChart.data.datasets[0].label = value1;
  eloChart.data.datasets[1].data = pitcher2_result;
  eloChart.data.datasets[1].label = value2;
  eloChart.update();
}




