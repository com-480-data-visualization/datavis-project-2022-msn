function SpiderGraph(year, countries) {  
	/*
	year Int : the year the data should be taken from
	countries Array[String] : countries to be compared w/ Switzerland
	*/

	const LOCATION = 'Switzerland';
	const FEATURES = ['hap_score', 'sunshine', 'temperature', 'GDP', 'population'];
	const FEATURES_PRETTY = FEATURES.map(f => f.charAt(0).toUpperCase() + f.slice(1));
	FEATURES_PRETTY[0] = 'Score';

	////////////////////////////////////////////////////////////// 
	//////////////////////// Set-Up ////////////////////////////// 
	////////////////////////////////////////////////////////////// 

	const margin = { top: 100, right: 100, bottom: 100, left: 100 };
	const width = Math.min(350, window.innerWidth - 10) - margin.left - margin.right;
	const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);


	////////////////////////////////////////////////////////////// 
	////////////////////////// Data ////////////////////////////// 
	////////////////////////////////////////////////////////////// 

	// remove duplicates
	countries = [...new Set([LOCATION, ...countries])]

	d3.csv(`data/norm/df_final_${year}_norm.csv`, function(error, data) {
		var array = [];

		data.forEach(d => {
			countries.includes(d.country) && array.push(
				FEATURES.map((feature, idx) => ({ 'axis': FEATURES_PRETTY[idx], 'value': d[feature] }))
			);
		});

		const color = d3.scale.ordinal().range(['#CC333F', '#00A0B0', '#EDC951']);
		
		const radarChartOptions = {
			w: width,
			h: height,
			margin: margin,
			maxValue: 0.5,
			levels: 4,
			roundStrokes: true,
			color: color
		};

		// Call function to draw the Radar chart
		RadarChart("#country-chart", array, radarChartOptions);
	});
}
