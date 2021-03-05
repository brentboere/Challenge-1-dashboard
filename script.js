// Our labels along the x-axis
var timespend = [1,2,3,4,5,6,7,8,9,10];
// For drawing the lines
var diesel = [86,114,106,106,107,111,133,221,783,2478];
var kerosine = [282,350,411,502,635,809,947,1402,3700,5267];
var gasoline = [168,170,178,190,203,276,408,547,675,734];

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: timespend,
    datasets: [
      { 
        data: diesel,
        label: "Diesel",
        borderColor: "#9352D8",
        fill: false
      },
      { 
        data: kerosine,
        label: "Kerosine",
        borderColor: "#D97EE6",
        fill: false
      },
      { 
        data: gasoline,
        label: "Gasoline",
        borderColor: "#A570F5",
        fill: false
      },
    ]
  },
      options: {
      legend: {
      labels: {
        fontColor: 'white',
        defaultFontFamily: "'Montserrat', sans-serif",
      }
      }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Afrika", "Azi\xEB", "Europa", "Latijns Amerika", "Noord Amerika", "Antartica", "Australi\xEB"],
      datasets: [
        {
          label: "Passagiers",
          backgroundColor: ["#EACBEF", "#D97EE6","#BB6AE6","#A570F5","#9352D8","#8A57FF","#532EAA"],
          data: [14,67,55,29,82,4,52]
        }
      ]
    },
    options: {
      legend: {
      labels: {
        fontColor: 'white',
        defaultFontFamily: "'Montserrat', sans-serif",
      }
      }
    }
});

// Set the date we're counting down to
var countDownDate = new Date("Jun 5, 2022 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "u "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


new Chart(document.getElementById("chart"), {
  type: 'horizontalBar',
  data: {
    labels: ['Big Mac','McFlurry', 'McKroket','Kipnuggets'],
    datasets: [
      {
        data: [1020, 5381, 3019, 4820],
        backgroundColor: '#af90ca',
        label: 'MacDonalds'
      }
    ]
  },
  options: {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});