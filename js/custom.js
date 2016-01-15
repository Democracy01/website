/* =================== Load Function =================== */
$(window).load(function() {
	"use strict";
	/* ----------- Page Loader ----------- */
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");						
	/* ----------- Pretty Photo ----------- */
	$("a[data-rel^='prettyPhoto']").prettyPhoto({
 		deeplinking: false
 	});
	initPortfolioGrid();
});
/* =================== Load Function Ends =================== */


/* =================== Ready Function =================== */
	$(document).ready(function() {
							   
	
	
	/* ----------- Scroll Navigation ----------- */
	$(function() {
		"use strict";
		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation-menu').outerHeight();
				$('html, body').stop().animate({					
					scrollTop : $($anchor.attr('href')).offset().top  - 45 + "px"
				}, 1200, 'easeInOutExpo');		
			event.preventDefault();
		});
	});
	
	/* ----------- Animation ----------- */
	$(function() {
		"use strict";
		$('.animated').appear(function() {
			var elem = $(this);
			var animation = elem.data('animation');
			if ( !elem.hasClass('visible') ) {
				var animationDelay = elem.data('animation-delay');
				if ( animationDelay ) {			
					setTimeout(function(){
					 elem.addClass( animation + " visible" );
					}, animationDelay);				
				} else {
					elem.addClass( animation + " visible" );
				}
			}
		});
	});
	
	/* ----------- Active Navigation ----------- */		
	$(function() {
		"use strict";
		$('body').scrollspy({ 
			target: '#nav',
			offset: 95
		});
	});
	
	
	/* ----------- Menus hide after click -- mobile devices ----------- */	
	$(function() {
		"use strict";
		$('.nav li a').click(function () {
			$('.navbar-collapse').removeClass('in');
		});
	});
	
	/* ========== Background image height equal to the browser height.==========*/
	$('.text-slider,.video-bg').css({ 'height': $(window).height() });
  	 $(window).on('resize', function() {
        $('.text-slider,.video-bg').css({ 'height': $(window).height() });
  	 });
	
	/*------Text slider------*/					   
	$(".home-text-slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		autoPlay: 5000,
		paginationSpeed : 400,
		singleItem: true,
		navigation: false,
		pagination: true,
		items : 1
  	});
	
	/*------Text slider 2 ( Without Pagination  )------*/					   
	$(".home-text-slider2").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		autoPlay: 5000,
		paginationSpeed : 400,
		singleItem: true,
		navigation: false,
		pagination: false,
		transitionStyle : "fade",
		items : 1
  	});
	
	/*------Testimonial slider------*/					   
	$("#testimonials-slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		autoPlay: 3000,
		paginationSpeed : 400,
		singleItem: true,
		navigation: false,
		pagination: true,
		items : 1
  	});
	
	/*------Clients slider------*/					   
	$("#clients-slider").owlCarousel({
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		autoPlay: 3000,
		paginationSpeed : 400,
		singleItem: false,
		navigation: false,
		pagination: false,
		items : 5,
		itemsDesktop : [1199, 5],
		itemsDesktopSmall : [980, 5],
		itemsTablet : [768, 3],
		itemsTabletSmall : [480, 2],
		itemsMobile : [479, 2]
  	});
	
	/*------Counter------*/		
	$(".count-number").appear(function(){
		$('.count-number').each(function(){
			datacount = $(this).attr('data-count');
			$(this).find('.counter').delay(6000).countTo({
				from: 10,
				to: datacount,
				speed: 3000,
				refreshInterval: 50,
			});
		});
	});
	
	/*------Progress Bar-----*/
	var bar = $('.progress-bar');
		$(bar).appear(function() {
		bar_width = $(this).attr('aria-valuenow');
		$(this).width(bar_width + '%');
		$(this).find('span').fadeIn(500);
	});
	
	
		
	/*------Tool Tip-----*/
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})
	
	 /* -------- Background Slider -------- */
		$(function() {
		  $('#slides').superslides({
			inherit_width_from: '.wide-container',
			inherit_height_from: '.wide-container'
		  });
		});
	
	/* -----------------Typed Text Slider-------------- */
	$(".element").each(function(){
		var $this = $(this);
		$this.typed({
		strings: $this.attr('data-elements').split(','),
		loop: true,
		typeSpeed: 100, // typing speed
		backDelay: 3000 // pause before backspacing
		});
	});
	  
	 /* ----------- Video Bg ----------- */
	 $(function(){
		$(".movie").mb_YTPlayer();
	  });
	 
	/*------Contact form-----*/
	$('#contactform').bootstrapValidator({
			container: 'tooltip',
			feedbackIcons: {
				valid: 'fa fa-check',
				invalid: 'fa fa-times',
				validating: 'fa fa-refresh'
			},
			fields: {            
				contact_name: {
					validators: {
						notEmpty: {
							message: 'Name is required. Please enter name.'
						}
					}
				},
				contact_number: {
					validators: {
						notEmpty: {
							message: 'Phone is required. Please enter phone number.'
						}
					}
				},
				contact_email: {
					validators: {
						notEmpty: {
							message: 'Email is required. Please enter email.'
						},
						emailAddress: {
							message: 'Please enter a correct email address.'
						}
					}
				},
				contact_message: {
					validators: {
						notEmpty: {
							message: 'Message is required. Please enter your message.'
						}                    
					}
				}
			}
		})
		.on('success.form.bv', function(e) {
						
			var data = $('#contactform').serialize();
			
			$.ajax({
					type: "POST",
					url: "process.php",					
					data: $('#contactform').serialize(),
					success: function(msg){						
						$('.form-message').html(msg);
						$('.form-message').show();
						submitButton.removeAttr("disabled");
						resetForm($('#contactform'));						
					},
					error: function(msg){						
						$('.form-message').html(msg);
						$('.form-message').show();
						submitButton.removeAttr("disabled");
						resetForm($('#contactform'));
					}
			 });
			 
			return false;
		});
		function resetForm($form) {
			$form.find('input:text, input:password, input, input:file, select, textarea').val('');
			$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
			$form.find('.form-control-feedback').css('display', 'none');
		}
		
		/* ----------- Google Map ----------- */	
	$(function() {
		"use strict";		
		function initialize() {
			var myLatlng = new google.maps.LatLng(44.5403, -78.5463);
			var mapOptions = {
				zoom: 8,  
				disableDefaultUI: true,
				scrollwheel: false,
				draggable: false,
				center: myLatlng
			};
			var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
			var contentString = '<div id="map-content">'+
			'<p>Office Names</p>'+
			'<div> Street Name,</div>'+
			'<div> City Name, State,</div>'+
			'<div>Country - xxxxx </div>'
			'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var marker = new google.maps.Marker({
				position: map.getCenter(),
				icon: {
					path: google.maps.SymbolPath.CIRCLE,
					scale: 10
				},
				map: map
			});
		
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map,marker);
			});
		}
		$('.map').each(function() {
     		google.maps.event.addDomListener(window, 'load', initialize);
		});
    });
	
});
// Portfolio Filter Js 
function initPortfolioGrid() {
  $('.project-grid').each(function(){  
	   var $port_container = $(this);  
	 		
		var filter_selector = $port_container.parent().find('.project-filters a.active').data('filter');  
		
		$port_container.isotope({			
			itemSelector: '.item',
			filter: filter_selector,
			animationEngine: "css",
			masonry: {
				columnWidth: '.grid-sizer'
			}
		});	  
  
		// Portfolio Filter Items
		$('.project-filters a').click(function(){
		
			$(this).parent().parent().find('a.active').removeClass('active');    
			$(this).addClass('active');
			var selector = $(this).parent().parent().find('a.active').attr('data-filter');  
			$(this).parents().find('.project-grid').isotope({ filter: selector, animationEngine : "css" });
		
			return false; 
		});
	});
}

