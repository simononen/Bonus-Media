jQuery(function($) {'use strict',

    //Countdown js
    $("#countdown").countdown({
            date: "10 july 2017 12:00:00",
            format: "on"
        },

        function() {
            // callback function
        });


	//Scroll Menu

	function menuToggle()
	{
		var windowWidth = $(window).width();

		if(windowWidth > 767 ){
			$(window).on('scroll', function(){
				if( $(window).scrollTop()>500 ){
					$('.navbar.navbar-inverse').addClass('navbar-fixed-top');
				} else {
					$('.navbar.navbar-inverse').removeClass('navbar-fixed-top');
				}
			});
		}else{

			$('.navbar.navbar-inverse').addClass('navbar-fixed-top');
				
		}
	}

	menuToggle();

	// Contact form validation
	var form = $('.contact-form');
	form.submit(function () {'use strict',
		$this = $(this);
		$.post($(this).attr('action'), function(data) {
			$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
		},'json');
		return false;
	});

	$( window ).resize(function() {
		menuToggle();
	});

	$('.na-lit ul').onePageNav({
		currentClass: 'active',
	    changeHash: false,
	    scrollSpeed: 1000,
	    scrollOffset: 0,
	    scrollThreshold: 0.3,
	    filter: ':not(.no-scroll)'
	});

});





