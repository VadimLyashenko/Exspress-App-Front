jQuery(document).ready(function( $ ){
   $("#menu").mmenu({
		// "iconPanels": true,
		"slidingSubmenus": false,
		"extensions": [
    "pagedim-black", //or white
    "position-right",
    "border-none",
    "fx-menu-slide",
    "custom-width",
    "position-front"
    // "multiline" //многострочность
		],

		navbar: {
			"title": "Каталог"
		}
	});
});