var batter_result = null
var pitcher_result = null

var batterSelector = document.getElementById("batter");
var pitcherSelector = document.getElementById("pitcher");
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


function updateChart() {
  var value1 = batterSelector.options[batterSelector.selectedIndex].getAttribute('value');
  var value2 = pitcherSelector.options[pitcherSelector.selectedIndex].getAttribute('value');
    
  for (var i = 0; i < batter_obj.length; i++){
    if (batter_obj[i].name == value1){
      batter_result = batter_obj[i].norm_elo
    }
  }   

  for (var i = 0; i < pitcher_obj.length; i++){
    if (pitcher_obj[i].name == value2){
      pitcher_result = pitcher_obj[i].norm_elo
    }
  }  
  
  
  eloChart.data.datasets[0].data = batter_result;
  eloChart.data.datasets[0].label = value1;
  eloChart.data.datasets[1].data = pitcher_result;
  eloChart.data.datasets[1].label = value2;
  eloChart.update();
}







