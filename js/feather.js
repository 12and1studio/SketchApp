// an instance of the penTool class -- feather tool
function feather(){
	penTool.call(this);
}

feather.prototype = new feather();
feather.prototype.constructor = feather;

feather.prototype.draw = function(pair, current_segment, all_segments, context)
{
	var dx, dy, d;

	current_segment.push(pair);
	context.lineWidth = 1;
	context.lineCap = "round";
	context.strokeStyle = menu.swatch;
	for(i=0; i<current_segment.length; i++){
		if (i == 0) {
			var start_point = current_segment[0];
			context.beginPath();
			context.moveTo(start_point.x, start_point.y);
		}
		
		var next_point = current_segment[i];
		context.lineTo(next_point.x, next_point.y);
		context.stroke();

		if (i > 0){
		dx = current_segment[i].x - current_segment[i-1].x;
		dy = current_segment[i].y - current_segment[i-1].y;
		d = dx + dy;

			if (d < 5000)
			{
				context.strokeStyle = menu.swatch;
				context.beginPath();
				context.moveTo(current_segment[i-1].x + (dx * 0.2), current_segment[i-1].y + (dy * 0.2));
				context.lineTo(current_segment[i].x - (dx * 5), current_segment[i].y - (dy * 5));
				context.stroke();
			}
		}
	}
	
	all_segments.push(current_segment);
	current_segment = [];
	return current_segment;
}

feather = new feather();