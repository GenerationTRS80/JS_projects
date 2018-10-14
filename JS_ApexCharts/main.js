/*jshint esversion: 6 */
// Chart Options
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    background: '#f4f4f4',
    forecolor: '#333'
  },

  // Series data has an array with an object inside
  series: [{
    name: 'Population',
     data: [
      8550405,
      3971883,
      2720546,
      2296224,
      1567442,
      1563025,
      1469845,
      1394928,
      1300092,
      1026908]
  }],

  xaxis: {
    categories: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Philadelphia",
      "Phoenix",
      "San Antonio",
      "San Diego",
      "Dallas",
      "San Jose"
    ]
  },

  // Flip the chart sideways = true
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ['#f44336']
  },

  // TITLE of chart
  title: {
    text: 'Largest City by Population',
    align: 'center',
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: '25px'
    }

  }
};

// Init Chart  ApetChart ((s)) plural
// NOTE: you can get Element by ID
const chart = new ApexCharts(document.getElementById('chart'),options);
// const chart = new ApexCharts(document.querySelector("#chart"),options);

// Render Chart
chart.render();

// Event Method Example

// 1) Get title/description of Button
const name = document.getElementById('btnHorizontal');

// NOTE: Contcatenate using (( + ))
// console.log('Button Title' + name.innerHTML);
// console.log(name);

// 2) Update chart to horizontal on button click

let btnHorVer=true;
document.getElementById('btnHorizontal').addEventListener('click', chartHorizontal());

// Below is a test function
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}



function chartHorizontal(){

  
  
  if (btnHorVer==true) {
    // displayDate();
    console.log('True');
    let btnHorVer = false;

    chart.updateOptions(
      {
        plotOptions: {
          bar: {
            horizontal: true
          }
        }
      }
    );
  }
  else {
    console.log('false');
    let btnHorVer = true;

    chart.updateOptions(
      {
        plotOptions: {
          bar: {
            horizontal: false
          }
        }
      }
    );
  }
  

}






