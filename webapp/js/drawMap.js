var aspectRatio = 1.8 //2 old value
var div = d3.select( "div#map1" )

//console.log(div)
//console.log(div.nodes()[0])
function draw(div){
	// Get client width and compute height
	var width = div.nodes()[0].clientWidth;
	var height = width / aspectRatio;

	console.log(width)
	console.log(height)


	var svg = div.append( "svg" )
		.attr("id", "chart")
		.attr("width", width)
		.attr("height", height)




	var g = svg.append( "g" );

	var mercatorProjection = d3.geoMercator()
	  .scale(width * 2 )
	  // old value 1.92982
	  .center( [2.222528, 46.206420])
	  .translate([width/2,height/2]);

	var geoPath = d3.geoPath()
	    .projection(mercatorProjection )

	var color = d3.scaleLinear()
		.domain([0, 37])
		.range(["red", "white"]);

	//console.log(color)

	
	g.selectAll("path" )
	  .data(dep.features)
	  .enter()
	  .append( "path" )
	  .attr( "fill", function(d){return color(d.properties.presence)})
	  .attr( "d", geoPath);


	x_legend = width*0.8
	y_legend = height *0.25
	svg.append("g")
            .attr("class", "legendLinear")
            .attr("transform", "translate(" + x_legend +"," + y_legend +")");

    var scaleCell = d3.scaleLinear()
    	.domain([200, 1140])
    	.range([3,19])


    var legendLinear = d3.legendColor()
            .shapeWidth(width*0.05)
            .orient("vertical")
            .cells(scaleCell(width))
            .ascending(true)
            .title("Présence (semaine sur 12 mois)")
            .scale(color);

    svg.select(".legendLinear")
            .call(legendLinear);
	
}

draw(div)