var map;
var m = document.getElementById('map');
	if(m != undefined){
		DG.then(function () {
		    map = DG.map('map', {
		        center: [54.98, 82.89],
		        zoom: 13
		    });
		});
	}