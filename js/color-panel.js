// Theme Panel Open/Close
$( "#theme-panel .panel-button" ).click(function(){
	$( "#theme-panel" ).toggleClass( "close-theme-panel", "open-theme-panel", 1000 );
	$( "#theme-panel" ).toggleClass( "open-theme-panel", "close-theme-panel", 1000 );
	return false;
});	

// Color Skins
$('.switcher').click(function(){
	var title = jQuery(this).attr('title');
	jQuery('#changeable-colors').attr('href', 'css/color-schemes/' + title + '.css');
	return false;
});