var picture = document.getElementsByClassName("enlarge");
var counter = document.getElementById("counter");
picture.addEventListener("click", enlargePic);
var toggle = 1;

function enlargePic() {
	var link = picture[0].src;
	counter.innerHTML = this.index;

	//Creates a div element and insert it (append) to the body
	var div = document.createElement("div");
	div.style.position = "fixed";
	div.style.top = "0px";
	div.style.left = "0px";
	div.style.width = "100%";
	div.style.height =  "100%";
	div.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
	div.style.backgroundImage = "url('" + link + "')";
	div.style.backgroundPosition = "center";
	div.style.backgroundRepeat = "no-repeat";
	div.style.backgroundOrigin = "center";
	if(window.innerWidth <= 1080){div.style.backgroundSize = "90%";}
	else if (window.innerWidth > 1080) {div.style.backgroundSize = "50%";}
	else {div.style.backgroundSize = "45%";};
	/*if(window.innerWidth > 1280) {
		div.style.backgroundSize = "50%";
	} else if(window.innerWidth <= 1280) {
		div.style.backgroundSize = "75%";
	} else (window.innerWidth <= 720) {
		div.style.backgroundSize = "100%";
	};*/
	document.body.appendChild(div);

	//Creates an img element and insert it inside the div we just created
	/*var img = document.createElement("img");
	img.src = link;
	img.style.Left = Math.abs(window.outerWidth-img.width/2) + "px";
	img.style.position = "absolute";
	img.style.top = 2.5 + "%";
	img.style.width = "100%";
	img.style.maxWidth = "960px";
	var animate = 10;
	img.style.width = animate + "px";
	animate =+ 5;
	div.appendChild(img);*/

	//Removes div and img from the DOM on clicked
	div.addEventListener("click", clearDiv);
	function clearDiv() {
		// div.removeChild(img);
		document.body.removeChild(div);
	}
}

/*
var img = document.createElement("img");
img.src = counter + ".png";
lel.appendChild(img);

function myFunction() {
    var x = document.getElementsByClassName("mystyle")[0].className;
    var y = document.getElementById("myDIV").className;
    document.getElementById("demo").innerHTML = "Using getElementsByClassName: " + x + "<br>" + "Using getElementById: " + y;
}

var element = document.getElementsByClassName('className');
for (var i = 0; i < element.length; i++) {
   // your index is inside here
}

el[i] is the element in the current iteration, i is the index

    (I.e. the third element with the class "className" would be 3)

if (i == 3)
return el[i]
*/
