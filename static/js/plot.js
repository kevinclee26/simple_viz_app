d3.json('./data').then(function(response){
	x=response.map(row=>row[0]);
	y=response.map(row=>row[1]);
	trace={
		'type': 'scatter', 
		'mode': 'marker', 
		'x': x, 
		'y': y
	}
	Plotly.newPlot('plot', [trace])
});