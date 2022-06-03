d3.csv('data/bubble/df_final_2015_hap_norm.csv', function (err, data) {
    const get_data = function (row) {
        return {
            "country": row.country,
            "region": row.region,
            "GDP": Math.log(row.GDP),
            "hap_score": parseFloat(row.hap_score) * 50,
            "sunshine": row.sunshine,
            "population": Math.log(row.population)
        }
    }

    console.log(data.length);
    var europe_data = new Array();
    var asia_data = new Array();
    var southame_data = new Array();
    var northame_data = new Array();
    var africa_data = new Array();
    var ocean_data = new Array();
    for (let i = 0; i < data.length; i++) {
        if (data[i].region === "Europe") {
            europe_data[i] = get_data(data[i]);
        }
        else if (data[i].region === "Asia") {
            asia_data[i] = get_data(data[i]);
        }
        else if (data[i].region === "North America") {
            northame_data[i] = get_data(data[i]);
        }
        else if (data[i].region === "South America") {
            southame_data[i] = get_data(data[i]);
        }
        else if (data[i].region === "Africa") {
            africa_data[i] = get_data(data[i]);
        }
        else if (data[i].region === "Oceania") {
            ocean_data[i] = get_data(data[i]);
        }
    };

    function unpack(data, key) {
        return data.map(function (row) { return row[key]; });
    }

    var Europe = {
        x: unpack(europe_data, 'GDP'),
        y: unpack(europe_data, 'sunshine'),
        z: unpack(europe_data, 'population'),
        mode: 'markers',
        marker: {
            // color: 'rgb(127, 127, 127)',
            size: unpack(europe_data, 'hap_score'),
            // sizeref: 0.05,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d',
        name: 'Europe'
    };

    var Asia = {
        x: unpack(asia_data, 'GDP'),
        y: unpack(asia_data, 'sunshine'),
        z: unpack(asia_data, 'population'),
        mode: 'markers',
        marker: {
            // color: 'rgba(217, 217, 217, 0.14)',
            size: unpack(asia_data, 'hap_score'),
            // sizeref: 0.05,
            symbol: 'circle',
            line: {
                color: 'rgba(217, 217, 217, 0.14)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d',
        name: 'Asia'
    };

    var NorthAme = {
        x: unpack(northame_data, 'GDP'),
        y: unpack(northame_data, 'sunshine'),
        z: unpack(northame_data, 'population'),
        mode: 'markers',
        marker: {
            // color: 'rgb(127, 127, 127)',
            size: unpack(northame_data, 'hap_score'),
            // sizeref: 0.05,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d',
        name: 'North America'
    };

    var SouthAme = {
        x: unpack(southame_data, 'GDP'),
        y: unpack(southame_data, 'sunshine'),
        z: unpack(southame_data, 'population'),
        mode: 'markers',
        marker: {
            // color: 'rgb(127, 127, 127)',
            size: unpack(southame_data, 'hap_score'),
            // sizeref: 0.05,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d',
        name: 'South America'
    };

    var Oceania = {
        x: unpack(ocean_data, 'GDP'),
        y: unpack(ocean_data, 'sunshine'),
        z: unpack(ocean_data, 'population'),
        mode: 'markers',
        marker: {
            // color: 'rgb(127, 127, 127)',
            size: unpack(ocean_data, 'hap_score'),
            // sizeref: 0.05,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d',
        name: 'Oceania'
    };

    var Africa = {
        x: unpack(africa_data, 'GDP'),
        y: unpack(africa_data, 'sunshine'),
        z: unpack(africa_data, 'population'),
        mode: 'markers',
        marker: {
            // color: 'rgb(127, 127, 127)',
            size: unpack(africa_data, 'hap_score'),
            // sizeref: 0.05,
            symbol: 'circle',
            line: {
                color: 'rgb(204, 204, 204)',
                width: 1
            },
            opacity: 0.8
        },
        type: 'scatter3d',
        name: 'Africa'
    };


    var data = [Europe, Asia, NorthAme, SouthAme, Oceania, Africa];
    var layout = {
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        },
        scene: {
            xaxis: { title: 'Log GDP' },
            yaxis: { title: 'Average Sunshine' },
            zaxis: { title: 'Log Population' },
        },
        legend: {
            x: 1,
            y: 0.5
        }
    };
    Plotly.newPlot('myDiv2', data, layout);
});
