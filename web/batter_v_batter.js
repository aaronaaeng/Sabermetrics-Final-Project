var batterOneSelector =  document.getElementById("batter1");
var batterTwoSelector = document.getElementById("batter2");
var batterChart;

window.onload = function() {
  batterChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [16, 32, 48, 64, 80, 96, 112, 128, 144, 162],
      datasets: [{ 
          data: [],
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [],
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: "Batter vs. Pitcher"
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

function updateBatterChart() {
  var value1 = batterOneSelector.options[batterOneSelector.selectedIndex].getAttribute('value');
  var value2 = batterTwoSelector.options[batterTwoSelector.selectedIndex].getAttribute('value');
  


  var batter1_result;
  var batter2_result;

  for (var i = 0; i < batter_obj.length; i++){
    if (batter_obj[i].name == value1){
      batter1_result = batter_obj[i].norm_elo;
    }

    if (batter_obj[i].name == value2){
      batter2_result = batter_obj[i].norm_elo;
    }
  }      

  batterChart.data.datasets[0].data = batter1_result;
  batterChart.data.datasets[0].label = value1;
  batterChart.data.datasets[1].data = batter2_result;
  batterChart.data.datasets[1].label = value2;
  batterChart.update();
}








