function Menu()
{
	this.init();
}



Menu.prototype =
{
	container: null,
	form: null,
	select: null,
	save: null,
	undo: null,
	clear: null,
	option: null,
	brush: null,
	swatch: "#236E55",


	init: function()
	{
		this.container = document.createElement("div");
		this.container.className = "hipster menu";
		this.container.style.background = "#2E2E2E";
		this.container.style.position = "absolute";
		this.container.style.left = "0px";
		this.container.style.height = window.innerHeight;
		this.container.style.width = "200px";
		this.container.style['-webkit-transition'] = "left 2s";

		logo = document.createElement("img");
		logo.src = "js/../../static/hipster_draw.png";
		this.container.appendChild(logo);

		space = document.createElement("div");
		this.container.appendChild(space);

		space = document.createElement("div");
		this.container.appendChild(space);

		// creates a drop-down menu for brushes
		this.form = document.createElement("form");
		this.select = document.createElement("select");
		this.select.style.cursor = "pointer";
		this.select.style.width = "150px";
		this.select.style.height = "20px";
		this.select.style.margin = "6px";
		this.select.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 8.0)";

		
		this.option = document.createElement("option");
		this.option.value = "pencil";
		this.option.innerHTML = "pencil";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "pixel";
		this.option.innerHTML = "pixel";
		this.select.appendChild(this.option);
		
		this.option = document.createElement("option");
		this.option.value= "feather";
		this.option.innerHTML = "feather";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "buzz";
		this.option.innerHTML = "buzz";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "fancy";
		this.option.innerHTML = "fancy";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "circles";
		this.option.innerHTML = "circles";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "mirrorPixel";
		this.option.innerHTML = "mirror pixel";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "mirrorPencil";
		this.option.innerHTML = "mirror pencil";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "geometric";
		this.option.innerHTML = "geometric";
		this.select.appendChild(this.option);

		this.option = document.createElement("option");
		this.option.value= "test";
		this.option.innerHTML = "test";
		this.select.appendChild(this.option);

		this.form.appendChild(this.select);
		this.container.appendChild(this.form);

		space = document.createElement("div");
		this.container.appendChild(space);

		breakHere = document.createElement("br");
		this.container.appendChild(breakHere);
		
		//color swatches
		this.colordiv = document.createElement("div");
		this.colordiv.class = "color";
		this.colordiv.style.overflow = "hidden";

		this.sixthColor = document.createElement("div");
		this.sixthColor.style.display = "inline-block";
		this.sixthColor.style.cursor = "pointer";
		this.sixthColor.style.margin = "3px";
		this.sixthColor.style['border-radius'] = "22px";
		this.sixthColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.sixthColor.style.width = "30px";
		this.sixthColor.style.height = "30px";
		this.sixthColor.style.background = "#236E55";
		this.colordiv.appendChild(this.sixthColor);

		this.seventhColor = document.createElement("div");
		this.seventhColor.style.display = "inline-block";
		this.seventhColor.style.cursor = "pointer";
		this.seventhColor.style.margin = "3px";
		this.seventhColor.style['border-radius'] = "22px";
		this.seventhColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.seventhColor.style.width = "30px";
		this.seventhColor.style.height = "30px";
		this.seventhColor.style.background = "#FF8C40";
		this.colordiv.appendChild(this.seventhColor);

		
		breakHere = document.createElement("br");
		this.colordiv.appendChild(breakHere);

		this.firstColor = document.createElement("div");
		this.firstColor.style.display = "inline-block";
		this.firstColor.style.cursor = "pointer";
		this.firstColor.style.margin = "3px";
		this.firstColor.style['border-radius'] = "22px";
		this.firstColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.firstColor.style.width = "30px";
		this.firstColor.style.height = "30px";
		this.firstColor.style.background = "#000046";
		this.colordiv.appendChild(this.firstColor);

		this.secondColor = document.createElement("div");
		this.secondColor.style.display = "inline-block";
		this.secondColor.style.cursor = "pointer";
		this.secondColor.style.margin = "3px";
		this.secondColor.style['border-radius'] = "22px";		
		this.secondColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.secondColor.style.width = "30px";
		this.secondColor.style.height = "30px";
		this.secondColor.style.background = "#FFF836";
		this.colordiv.appendChild(this.secondColor);

		this.thirdColor = document.createElement("div");
		this.thirdColor.style.display = "inline-block";
		this.thirdColor.style.cursor = "pointer";
		this.thirdColor.style.margin = "3px";
		this.thirdColor.style['border-radius'] = "22px";		
		this.thirdColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.thirdColor.style.width = "30px";
		this.thirdColor.style.height = "30px";
		this.thirdColor.style.background = "#AAFA9F";
		this.colordiv.appendChild(this.thirdColor);
		
		breakHere = document.createElement("br");
		this.colordiv.appendChild(breakHere);

		this.fourthColor = document.createElement("div");
		this.fourthColor.style.display = "inline-block";
		this.fourthColor.style.cursor = "pointer";
		this.fourthColor.style.margin = "3px";
		this.fourthColor.style['border-radius'] = "22px";		
		this.fourthColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.fourthColor.style.width = "30px";
		this.fourthColor.style.height = "30px";
		this.fourthColor.style.background = "#690735";
		this.colordiv.appendChild(this.fourthColor);

		this.fifthColor = document.createElement("div");
		this.fifthColor.style.display = "inline-block";
		this.fifthColor.style.cursor = "pointer";
		this.fifthColor.style.margin = "3px";
		this.fifthColor.style['border-radius'] = "22px";		
		this.fifthColor.style['-webkit-box-shadow'] = "inset 0px 1px 5px rgba(0, 0, 0, 8.0)";
		this.fifthColor.style.width = "30px";
		this.fifthColor.style.height = "30px";
		this.fifthColor.style.background = "#3D4051";
		this.colordiv.appendChild(this.fifthColor);

		this.container.appendChild(this.colordiv);

		breakHere = document.createElement("br");
		this.container.appendChild(breakHere);

		space = document.createElement("div");
		this.container.appendChild(space);


		// button for inverting the color of images
		this.invert = document.createElement("button");
		this.invert.innerHTML = "invert your sketch";
		this.invert.style.cursor = "pointer";
		this.invert.style.width = "150px";
		this.invert.style.height = "20px";
		this.invert.style.margin = "3px";
		this.invert.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 15.0)";
		this.container.appendChild(this.invert);


		space = document.createElement("div");
		this.container.appendChild(space);

		
		// button for drawing the image in grayscale
		this.grey = document.createElement("button");
		this.grey.innerHTML = "grayscale";
		this.grey.style.cursor = "pointer";
		this.grey.style.width = "150px";
		this.grey.style.height = "20px";
		this.grey.style.margin = "3px";
		this.grey.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 15.0)";
		this.container.appendChild(this.grey);


		space = document.createElement("div");
		this.container.appendChild(space);


		// button for saving images
		this.save = document.createElement("button");
		this.save.innerHTML = "save your sketch";
		this.save.style.cursor = "pointer";
		this.save.style.width = "150px";
		this.save.style.height = "20px";
		this.save.style.margin = "3px";
		this.save.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 15.0)";
		this.container.appendChild(this.save);

		space = document.createElement("div");
		this.container.appendChild(space);

		// undo button
		this.undo = document.createElement("button");
		this.undo.innerHTML = "undo that move";
		this.undo.style.cursor = "pointer";
		this.undo.style.width = "150px";
		this.undo.style.height = "20px";
		this.undo.style.margin = "3px";
		this.undo.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 15.0)";
		this.container.appendChild(this.undo);

		space = document.createElement("div");
		this.container.appendChild(space);

		this.gallery = document.createElement("button");
		this.gallery.innerHTML = "gallery"
		this.gallery.style.cursor = "pointer";
		this.gallery.style.width = "150px";
		this.gallery.style.height = "20px";
		this.gallery.style.margin = "3px";
		this.gallery.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 15.0)";
		this.container.appendChild(this.gallery);

		space = document.createElement("div");
		this.container.appendChild(space);

		// clear button
		this.clearImage = document.createElement("button");
		this.clearImage.innerHTML = "Start Over?";
		this.clearImage.style.cursor = "pointer";
		this.clearImage.style['font-weight'] = "bold";
		this.clearImage.style.width = "150px";
		this.clearImage.style.height = "20px";
		this.clearImage.style.margin = "3px";
		this.clearImage.style['-webkit-box-shadow'] = "0px 1px 5px rgba(0, 0, 0, 15.0)";
		this.container.appendChild(this.clearImage);

		space = document.createElement("div");
		this.container.appendChild(space);

		this.logout = document.createElement("a");
		var linkText = document.createTextNode("logout");
		this.logout.appendChild(linkText);
		this.logout.title = "logout";
		this.logout.href = "/logout";
		this.logout.style.color = "white";
		this.logout.style['font-size'] = '10px';
		this.container.appendChild(this.logout);

		space = document.createElement("div");
		this.container.appendChild(space);

		breakHere = document.createElement("br");
		this.container.appendChild(breakHere);

		document.body.appendChild(this.container);
	}
}

//color selection function
function colorSwatch(event){
	menu.swatch = event.target.style.background;
}


// provides functionality to drop-down menu for brush selection
function menuChanged() {
	return menu.select.value;
}

// function that clears canvas
function clearCanvas(){
	p.image_list = [];
	canvas.width = canvas.width;
	surface.context.fillStyle = "white";
	surface.context.fillRect(0, 0, canvas.width, canvas.height);
}

function invertImage(){
	p.image_list.push(surface.context.getImageData(0, 0, canvas.width, canvas.height));
	var imgd2 = p.image_list[p.image_list.length - 1];
	var data = imgd2.data;
	for (var i=-0; i<data.length; i+=4){
		data[i] = 255 - data[i];
		data[i + 1] = 255 - data[i + 1];
		data[i + 2] = 255 - data[i + 2];
	}

	//overwrite existing image
	surface.context.putImageData(imgd2,0,0);
}

function greyImage(){
	p.image_list.push(surface.context.getImageData(0, 0, canvas.width, canvas.height));
	var imgd2 = p.image_list[p.image_list.length - 1];
	var data = imgd2.data;
	for (var i=-0; i<data.length; i+=4){
		brightness = 0.34 * data[i] + 0.5 * data[i+1] + 0.16 * data[i+2];
		data[i] = brightness;
		data[i + 1] = brightness;
		data[i + 2] = brightness;
	}

	//overwrite existing image
	surface.context.putImageData(imgd2,0,0);
}

// It works!!
function undo(){
	canvas.width = canvas.width;
	surface.context.fillStyle = "white";
	surface.context.fillRect(0, 0, canvas.width, canvas.height);
	p.image_list.pop()
	if (p.image_list.length > 0)
	{
		var imgd = p.image_list[p.image_list.length - 1];
		surface.context.putImageData(imgd,0,0);
	}
}

// function that saves the image by opening img in a new window
function saveImage(){
	var img = surface.canvas.toDataURL('image/png');

	// image data is posted to the /add_gallery route handler in the controller which will save it to the database!
	$.post("/add_gallery", {image: img});
	window.open(img, '_blank');
}

//provides link functionality to the gallery button
function gallery(){
	window.location.href = '/gallery';
}

// two functions to show/hide menu according to mouse placement
function mouseLeave(){
	menu.container.style.left = "-180px";
}


function mouseHover(){
	menu.container.style.left = "0px";
}

menu = new Menu();
menu.select.onchange = menuChanged;
menu.container.onmouseout = mouseLeave;
menu.container.onmouseover = mouseHover;


menu.firstColor.addEventListener('click', colorSwatch, false);
menu.secondColor.addEventListener('click', colorSwatch, false);
menu.thirdColor.addEventListener('click', colorSwatch, false);
menu.fourthColor.addEventListener('click', colorSwatch, false);
menu.fifthColor.addEventListener('click', colorSwatch, false);
menu.sixthColor.addEventListener('click', colorSwatch, false);
menu.seventhColor.addEventListener('click', colorSwatch, false);

menu.clearImage.addEventListener('click', clearCanvas, false);
menu.undo.addEventListener('click', undo, false);
menu.save.addEventListener('click', saveImage, false);
menu.gallery.addEventListener('click', gallery, false);
menu.invert.addEventListener('click', invertImage, false);
menu.grey.addEventListener('click', greyImage, false);
