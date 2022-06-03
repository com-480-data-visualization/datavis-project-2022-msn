const map_chart = async function(feature) {
    // data_path = "df_final_" + year.toString() + ".csv";
    const feature_list = ['hap_score', 'GDP', 'population', 'temperature', 'sunshine'];
    const name_list = ['Happiness Score', 'GDP', 'Population', 'Average Temperature', 'Average Sunshine'];
    // console.log(data_path);
    d3.csv("data/finals/df_final_2020.csv", function (err, data) {
        // console.log(data[0]);
        const happiness_data = [];
        for (let i = 0; i < data.length; i++) {
            happiness_data.push({
                name: data[i].country,
                code: data[i].code,
                value: parseFloat(data[i][feature_list[feature]])
            });
        }
        console.log(happiness_data);

        // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
        const mapData = Highcharts.geojson(Highcharts.maps['custom/world']);
        mapData.forEach(function (country) {
            country.id = country.properties['hc-key']; // for Chart.get()
            country.flag = country.id.replace('UK', 'GB').toLowerCase();
        });

        // Wrap point.select to get to the total selected points
        Highcharts.wrap(Highcharts.Point.prototype, 'select', function (proceed) {

            proceed.apply(this, Array.prototype.slice.call(arguments, 1));

            const points = mapChart.getSelectedPoints();
            if (points.length) {
                if (points.length === 1) {
                    console.log(points);
                    document.querySelector('#info #flag')
                        .className = 'flag ' + points[0].flag;
                    document.querySelector('#info h2').innerHTML = points[0].name;
                } else {
                    console.log(points);
                    document.querySelector('#info #flag')
                        .className = 'flag';
                    document.querySelector('#info h2').innerHTML = 'Comparing countries';
                }
                document.querySelector('#info .subheader')
                    .innerHTML = '<h4>Radar Chart</h4><small><em>Shift + Click on map to compare countries</em></small>';

                countries = new Array();
                points.forEach(function (p) {
                    countries.push(p.name);
                })
                console.log(countries);
                SpiderGraph(2020, countries);

            } else {
                document.querySelector('#info #flag').className = '';
                document.querySelector('#info h2').innerHTML = '';
                document.querySelector('#info .subheader').innerHTML = '';
            }
        });


        const mapChart = Highcharts.mapChart('container', {

            chart: {
                map: Highcharts.maps['custom/world'],
                backgroundColor: "#FEFEE6",
            },

            title: {
                text: name_list[feature] + ' by country',
                style: {
                    fontSize: "25px",
                    fontWeight: "bold"
                }
            },

            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },

            colorAxis: {
                type: 'logarithmic',
                endOnTick: true,
                startOnTick: true,
                // min: 0.1,
                // Change the color
                // minColor: '#efecf3',
                // maxColor: '#990041'
            },

            tooltip: {
                valueDecimals: 2,
                footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
            },

            series: [{
                data: happiness_data,
                mapData: mapData,
                joinBy: ['iso-a2', 'code'],
                name: name_list[feature],
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    select: {
                        color: '#a4edba',
                        borderColor: 'black',
                        dashStyle: 'shortdot'
                    }
                },
                borderWidth: 0.5
            }]
        });
        mapChart.get('ch').select();
    });
};

map_chart(0);

const refreshDraw = function (feature) {
    $("#refresh").load(location.href + ' #refresh');
    map_chart(feature);
}
