// an instance of the penTool class -- mirror pixel tool
function mirrorPixel(){
	penTool.call(this);
}

mirrorPixel.prototype = new penTool();
mirrorPixel.prototype.constructor = mirrorPixel;

mirrorPixel.prototype.draw = function(pair, current_segment, all_segments, context)
{
	var num = 2;
	current_segment.push(pair);
	for(i=0; i<current_segment.length; i++){
		context.fillStyle = menu.swatch;
		if (current_segment[i].x < surface.canvas.width / 2)
		{
			context.fillRect(current_segment[i].x, current_segment[i].y, num, num);
			context.fillRect((surface.canvas.width / 2) + ((surface.canvas.width / 2) - current_segment[i].x), current_segment[i].y, num, num);

		}
		else{
			context.fillRect(current_segment[i].x, current_segment[i].y, num, num);
			context.fillRect(surface.canvas.width - current_segment[i].x, current_segment[i].y, num, num);

		}
	}

	all_segments.push(current_segment);
	current_segment = [];
	return current_segment;
}

mirrorPixel = new mirrorPixel();