Plotly.d3.csv("data.csv", function(err, rows){

  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}


var Ethiopia = {
  type: "scatter",
  mode: "lines",
  name: 'Ethiopia',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'ETH'),
  line: {color: '#17BECF'}
}

var Kenya = {
  type: "scatter",
  mode: "lines",
  name: 'Kenya',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'KEN'),
  line: {color: '#FF7133'}
}

var Rwanda = {
  type: "scatter",
  mode: "lines",
  name: 'Rwanda',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'RWA'),
  line: {color: '#248F09'}
}

var Tanzania = {
  type: "scatter",
  mode: "lines",
  name: 'Tanzania',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'TZA'),
  line: {color: '#3341FF'}
}

var Uganda = {
  type: "scatter",
  mode: "lines",
  name: 'Uganda',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'UGA'),
  line: {color: '#F633FF'}
}


var data = [Ethiopia,Kenya,Rwanda,Tanzania,Uganda];

var layout = {
  title: {
    text:'Plot Title',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    // xref: 'paper',
    // x: 0.05,
  },
  xaxis: {
    title: {
      text: 'x Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
      
    }
  }
};

Plotly.newPlot('graph1', data, layout);
})
