var picture = document.getElementsByClassName("enlarge");

function clickedClassHandler(name,callback) {
    // apply click handler to all elements with matching className
    var allElements = document.body.getElementsByTagName("*");
    for(var i = 0; i < allElements.length; i++) {
        if(allElements[i].className == name) allElements[i].onclick = handleClick;
    }

    function handleClick() {
        var parentChilds = this.parentNode.childNodes;
        var index = 0;
        for(var i = 0; i < parentChilds.length; i++) {
            if(parentChilds[i] == this) break;
            if(parentChilds[i].className == name) index++;
        }
        callback.call(this,index);
    }
}

clickedClassHandler("enlarge",function(index){
    var link = picture[index].src;

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
    if(window.innerWidth <= 1080){div.style.backgroundSize = "80%";}
    else if (window.innerWidth > 1080) {div.style.backgroundSize = "50%";}
    else {div.style.backgroundSize = "45%";};
	document.body.appendChild(div);

	//Removes div and img from the DOM on clicked
	div.addEventListener("click", clearDiv);
	function clearDiv() {
		// div.removeChild(img);
		document.body.removeChild(div);
	}
});
