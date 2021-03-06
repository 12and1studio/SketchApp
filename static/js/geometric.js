// an instance of the penTool class -- draws lines between points in the path
function geometric(){
	penTool.call(this);
	this.count = null;
}

geometric.prototype = new penTool();
geometric.prototype.constructor = geometric;


// draw function helps smooth lines drawn using splines by curving to midpoints between subsequent sample points
geometric.prototype.draw = function(current_segment, all_segments, context, color)
{
	color = color || menu.swatch;
	context.lineWidth = 0.5;
	context.lineCap = "round";
	context.strokeStyle = color;
	context.globalAlpha = 0.5;
	context.globalCompositeOperation = 'destination-atop';
	this.count = 0
	for(var i=0; i<current_segment.length - 2; i++){
		if (i == 0) {
			context.beginPath();
			context.moveTo(current_segment[i].x, current_segment[i].y);
		}
		var xc = (current_segment[i].x + current_segment[i+1].x) / 2;
		var yc = (current_segment[i].y + current_segment[i+1].y) / 2;
		context.quadraticCurveTo(current_segment[i].x,current_segment[i].y, xc, yc);
		context.stroke();
		
		dx = current_segment[i].x - current_segment[this.count].x;
		dy = current_segment[i].y - current_segment[this.count].y;
		d = dx * dx + dy * dy;

		if (d<5000 && Math.random() > 0.9)
		{
			context.beginPath();
			context.moveTo(current_segment[this.count].x, current_segment[this.count].y);
			context.lineTo(current_segment[i].x, current_segment[i].y);
			context.stroke();
		}
		current_segment[i].y = current_segment[i+1].y;

	}

	this.count ++;

	return current_segment;
}

geometric.prototype.draw2 = function(current_segment, all_segments, context, color)
{
	color = color || menu.swatch;
	context.lineWidth = 1;
	context.lineCap = "round";
	context.strokeStyle = color;
	for(var i=0; i<current_segment.length - 2; i++){
		if (current_segment[i].x < surface.canvas.width / 2)
		{
			if (i == 0)
			{
			context.beginPath();
			context.moveTo((surface.canvas.width / 2) + ((surface.canvas.width / 2) - current_segment[i].x), current_segment[i].y);
			}
		var xc = (((surface.canvas.width / 2) + ((surface.canvas.width / 2) - current_segment[i].x) + (surface.canvas.width / 2) + ((surface.canvas.width / 2) - current_segment[i+1].x))) / 2;
		var yc = (current_segment[i].y + current_segment[i+1].y) / 2;
		context.quadraticCurveTo((surface.canvas.width / 2) + ((surface.canvas.width / 2) - current_segment[i].x),current_segment[i].y, xc, yc);
		context.stroke();

		}
		else{
			if (i == 0)
			{
			context.beginPath();
			context.moveTo(surface.canvas.width - current_segment[i].x, current_segment[i].y);
			}
		var xc = ((surface.canvas.width - current_segment[i].x) + (surface.canvas.width - current_segment[i+1].x)) / 2;
		var yc = (current_segment[i].y + current_segment[i+1].y) / 2;
		context.quadraticCurveTo((surface.canvas.width - current_segment[i].x),current_segment[i].y, xc, yc);
		context.stroke();
		}
	}	

	return current_segment;
}

geometric = new geometric();
