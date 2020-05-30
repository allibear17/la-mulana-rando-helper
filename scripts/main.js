var sectionShown = [];
var markers = [];
var markerTypes = [
	"images/marker0.png", 
	"images/marker1.png", 
	"images/marker2.png",
];
var lastClick;

function changeBG(){
	document.body.style.backgroundColor = document.getElementById("bgcolor").value;
	document.getElementById("shopDropdown").style.backgroundColor = document.getElementById("bgcolor").value;
}

function info(){
	var id = document.getElementById("info")
	if (id.style.display == "block"){
		id.style.display = "none";
	}
	else {
		id.style.display = "block";
	}
}

function toggleItem(e){
	id = e.target;
	if ( id.style.opacity == 1.0 ){
		id.style.opacity = 0.5;
		id.style.filter = "grayscale(100%)";
	} else {
		id.style.opacity = 1.0;
		id.style.filter = "none";
	}
}
