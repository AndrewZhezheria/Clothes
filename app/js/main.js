$(function () {

	$('.work__items').slick({
		autoplay: true,
      autoplaySpeed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev"><img src="img/prev-arrow.svg" alt=""></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="img/next-arrow.svg" alt=""></button>',
		responsive: [
			{
			  breakpoint: 1201,
			  settings: {
				infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
		]
	});


})