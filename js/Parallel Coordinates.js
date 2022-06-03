d3.csv("data/finals/df_final_2018.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var data = [
    {
      type: "parcoords",
      pad: [80, 80, 80, 80],
      line: {
        color: unpack(rows, "region_id"),
        colorscale: [
          [0, "#3399cc"],
          [0.2, "#fbce40"],
          [0.4, "#ff9140"],
          [0.6, "#545454"],
          [0.8, "#7ed957"],
          [1, "#e13b76"],
        ],
      },

      dimensions: [
        {
          range: [2, 8],
          label: "Happiness Score",
          values: unpack(rows, "hap_score"),
        },
        {
          range: [20, 32],
          label: "GDP",
          values: unpack(rows, "GDP").map(Math.log),
        },
        {
          label: "Sunshine",
          range: [100, 312],
          values: unpack(rows, "sunshine"),
        },
        {
          label: "Temperature",
          range: [-2, 35],
          values: unpack(rows, "temperature"),
        },
        {
          label: "Population",
          range: [12, 22],
          values: unpack(rows, "population").map(Math.log),
        },
      ],
    },
  ];

  var layout = {
    width: 1000,
    font: {
      size: 16,
      color: "#7f7f7f",
      family: "Fredoka"
    },
    paper_bgcolor: '#FEFEE6'
  };

  Plotly.newPlot("parallel", data, layout);
});
