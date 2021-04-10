var picture = document.getElementById("enlarge");
var counter = document.getElementById("counter");
picture.addEventListener("click", enlargePic);
var toggle = 1;

function enlargePic() {
	var link = this.src;
	var size = {
		x: this.width,
		y: this.height
	}
	counter.innerHTML = link;
	var img = document.createElement("div");
	img.style.background = "url('" + link + "')" ;
	img.style.width = size.x + "px";
	img.style.height = size.y + "px";
	document.body.appendChild(img);
}

/*
var img = document.createElement("img");
img.src = counter + ".png";
lel.appendChild(img);
*/