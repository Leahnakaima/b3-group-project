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
  line: {color: '#FA8C00'}
}

var Kenya = {
  type: "scatter",
  mode: "lines",
  name: 'Kenya',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'KEN'),
  line: {color: '#007B63'}
}

var Rwanda = {
  type: "scatter",
  mode: "lines",
  name: 'Rwanda',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'RWA'),
  line: {color: '#C71E1D'}
}

var Tanzania = {
  type: "scatter",
  mode: "lines",
  name: 'Tanzania',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'TZA'),
  line: {color: '#008CB7'}
}

var Uganda = {
  type: "scatter",
  mode: "lines",
  name: 'Uganda',
  x: unpack(rows, 'Year'),
  y: unpack(rows, 'UGA'),
  line: {color: '#7F4C7B'}
}


var data = [Ethiopia,Kenya,Rwanda,Tanzania,Uganda];

var layout = {
  title: {
    text:'Availability of Latest Technology in East African Countries: Kenya and Rwanda are Leading the Pack',
    font: {
      family: 'Source Sans Pro',
      size: 20

    },
    // xref: 'paper',
    // x: 0.05,
  },
  xaxis: {
    title: {
      text: 'Year',
      font: {
        family: 'Source Sans Pro',
        size: 14,
        color: '#000000'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Availability of Latest Technology',
      font: {
        family: 'Source Sans Pro',
        size: 14,
        color: '000000'
      }  
    }
  }

};

Plotly.newPlot('graph1', data, layout);
})
