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

  // Flip the chart sideways
  plotOptions: {
    bar: {
      horizontal: true
    }
  }
};


// Init Chart  ApetChart ((s)) plural
// NOTE: you can get Element by ID
const chart = new ApexCharts(document.getElementById('chart'),options);
// const chart = new ApexCharts(document.querySelector("#chart"),options);

// Render Chart
chart.render();