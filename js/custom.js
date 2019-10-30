jQuery(document).ready(function($) {

	// main banner slow scroll
	var pContainerHeight = $('.banner, #about').height();

	$(window).scroll(function(){

	  var wScroll = $(this).scrollTop();

	  if (wScroll <= pContainerHeight) {

	    $('.title-area').css({
	      'transform' : 'translate(0px, '+ wScroll /8 +'%)'
	    });

	  }
	});

	// Smooth Scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	//Header adjust on Scroll
	var scroll_pos = 0;
	$(document).scroll(function() {
	  scroll_pos = $(this).scrollTop();
	  if(scroll_pos > 300) {
	    $("header").css('background-color', 'rgba(20,20,20,0.70)');
	  } else {
	    $("header").css({'background-color' : 'none', 'transition' : 'all .5s ease'});
	  }
	});
});
