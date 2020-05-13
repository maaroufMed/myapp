
$(function() {
	
	// add class to change bg navbar
	$(window).scroll(function () {       
		if($(window).scrollTop() > 0 ){
			$('.navbar').addClass('fixed');
		} else {
			$('.navbar').removeClass('fixed');
		}
	});
	

	
	var mixer = mixitup('.gallery', {
        
		 animation: {
			"duration": 300
		}
    });
	
    $('.portfolio ul li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
	
    // magnific Popup plugin
    $('.gallery a').magnificPopup({
        type:'image',
        gallery: {
          enabled: true, // set to true to enable gallery
          navigateByImgClick: true, // click of image this click next image
          arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
        }
    });
    // end magnific Popup
	
	// go to top 
	$('.go-top').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 1000);
	});
	
	$(window).scroll(function () {
		if ($(window).scrollTop() < 700) {
			$('.go-top').hide();
		
		} else {
			$('.go-top').show();
			
		}
		
		
		

	});
		if ($(window).scrollTop() < 700) {
			$('.go-top').hide();
		} else {
			$('.go-top').show();
		}
	
	// add class active to nav bar link
	$('header .navbar li a').click(function (e) {
		
		e.preventDefault();
		
		$(this).addClass('selected').parent().siblings().find('a').removeClass('selected');
		
		var att = '#' + $(this).data('scroll');
		
		$('html, body').animate({
			scrollTop: $(att).offset().top + 1
		}, 600);
		
		
	});
	
	$(window).scroll(function () {
		$('section').each(function () {
			
			if ($(window).scrollTop() > $(this).offset().top) {
				var mySection = $(this).attr('id');
				$('header .navbar  a').removeClass('selected');
				$('header .navbar li a[data-scroll="' + mySection + '"]').addClass('selected');
				
			}
		});
		if ($(window).scrollTop() === 0) {
			$('header .navbar  a').removeClass('selected');
			$('header .navbar li a[data-scroll="home"]').addClass('selected');
		}
	});
	

	

	
	
});