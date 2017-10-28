const Graph = ForceGraph3D()
	(document.getElementById("3d-graph"));

let curDataSetIdx;
const dataSets = getGraphDataSets();

let toggleData;
(toggleData = function() {
	curDataSetIdx = curDataSetIdx === undefined ? 0 : (curDataSetIdx+1)%dataSets.length;
	const dataSet = dataSets[curDataSetIdx];

	Graph.resetProps(); // Wipe current state
	dataSet(Graph); // Load data set

	$('#3d-graph').click(function(){
		var descriptions = [
			'Girl, Shanghai, likes dogs', 
			'Boy, 43, Minnesota, Enjoys cooking', 
			'Boy, 18, Florence, Enjoys skating and comedy',
			'28 Y/O, Miami, knitting, fashion, woodworking',
			'20-23 Y/O, North Dakota, blockchain, deer',
			'60, Boston, horses, woodworking, banking',
			'50-55 Y/O, artwork, french cooking, modeling'
		];
		var randomNumber = Math.floor(Math.random()*descriptions.length);
	    $(".description").html(descriptions[randomNumber]);
	});
})(); // IIFE init