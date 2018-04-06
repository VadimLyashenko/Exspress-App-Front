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

'use strict';

var els = {
	navIcon: document.getElementById('js-nav-button'),
	nav: document.getElementById('js-nav'),
	overlay: document.getElementById('js-overlay'),
	burgerLine: document.querySelector('.burger__line')
};

function toggleMenu() {
	els.burgerLine.classList.toggle('burger__line--active');
	document.body.classList.toggle('overflow');
	els.overlay.classList.toggle('site-overlay--visible');
	els.nav.classList.toggle('nav--visible');
}

[els.navIcon, els.overlay].forEach(function (el) {
	el.addEventListener('click', toggleMenu);
});
var l = document.getElementById('main-checker');
if(l != undefined){
	y = document.getElementsByClassName('header__header_bg');
	y[0].style.display = "none";
}

var a = document.getElementsByClassName('item');
if(a[0] != undefined){
	var b = getComputedStyle(a[0]);
}


for(var i = 0; i < a.length; i++){
	a[i].style.height = b.width;
}

window.addEventListener('resize', function(e){
	for(var i = 0; i < a.length; i++){
		a[i].style.height = b.width;
	}
});

var c = document.getElementsByClassName('left-bar__toggle-left-bar');
var d = document.getElementsByClassName('left-bar');
if( d[0] != undefined){
	var g = d[0].getElementsByTagName('li');

	c[0].onclick = function() {
	    d[0].classList.add('active-drop');
	};
	
	d[0].onclick = function(event) {
		var t = event.target;
		if(t.tagName == "LI"){
			d[0].classList.remove('active-drop');
			c[0].innerHTML=t.innerHTML;
		}
	}
}