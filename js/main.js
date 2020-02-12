$(function(){
	$('.main-slider').slick({
		arrows:false,
		dots:true
	});

	$(window).on('resize', function(){
			if($(window).width()<1200){
				$('.top-menu').appendTo('.mobile-menu');
			} else {
				$('.top-menu').appendTo('.header_box');
			}
	})

	$(window).trigger('resize');

	$('.toggle-btn').on('click', function(){
		$('.header-bottom').slideToggle();
	})
});