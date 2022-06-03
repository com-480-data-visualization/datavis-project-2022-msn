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
        color: unpack(rows, "hap_rank"),
        colorscale: [
          [0, "red"],
          [1, "yellow"],
          [2, "orange"],
          [3, "black"],
          [4, "green"],
          [5, "blue"],
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
    width: 1200,
    font: {
      size: 18,
      color: "#7f7f7f",
    },
  };

  Plotly.newPlot("parallel", data, layout);
});
