/*jshint esversion: 6 */
// Chart Options
const options = {
  chart: {
    height: 450,
    width: '100%',
    type: 'bar',
    background: '#f4f4f4',
    forecolor: '#333'
  }
  // Series data has an array with an object inside
  series: [{
    name: 'Population',
    data:[]
  }]
}


// Init Chart 
// Note you can get Element by ID
const chart = new ApexChart(document.getElementById('chart'),options);
// const chart = new ApexChart(document.querySelector('#chart'),options);

// Render Chart
chart.render();