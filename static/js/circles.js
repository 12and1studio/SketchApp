// a circle tool? --THIS IS A TEST--
function circles(){
	penTool.call(this);
}

circles.prototype = new penTool();
circles.prototype.constructor = circles;

circles.prototype.draw = function(current_segment, all_segments, context, color)
{
	color = color || menu.swatch;
	for(var i=0; i<current_segment.length; i++){
		context.strokeStyle = color;
		context.globalAlpha = 0.5;
		context.globalCompositeOperation = 'source-over';
		var radius = 50
		context.beginPath();
		context.arc(current_segment[i].x, current_segment[i].y, radius, 0, 2*Math.PI, false);
		context.lineWidth = 0.2;
		context.stroke();
	}

	return current_segment;
}

circles = new circles();
