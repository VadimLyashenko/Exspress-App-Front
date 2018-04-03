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
var a = document.getElementsByClassName('item');
var b = getComputedStyle(a[0]);

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
  // $(".dropdown-list li").click(function() {
  //   // $('.selLabel').text($(this).text());
  //   $('.dropdown').removeClass('active');
  // });

