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