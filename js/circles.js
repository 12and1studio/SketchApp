// a circle tool? --THIS IS A TEST--
function circles(){
	penTool.call(this);
}

circles.prototype = new penTool();
circles.prototype.constructor = circles;

circles.prototype.draw = function(pair, current_segment, all_segments, context)
{
	current_segment.push(pair);
	for(i=0; i<current_segment.length; i++){
		context.strokeStyle = menu.swatch;
		var radius = 50
		context.beginPath();
		context.arc(current_segment[i].x, current_segment[i].y, radius, 0, 2*Math.PI, false);
		context.lineWidth = 1;
		context.stroke();
	}

	all_segments.push(current_segment);
	current_segment = [];
	return current_segment;
}

circles = new circles();
