/* Template Name: Alim
   Author: Theme_Family
   Version: 1.0.0
   Created: November 2021
   File Description: Main Js file of the theme
*/

(function($) {
    "use strict";
		
		
	// Preloader
	$(window).on('load', function() { 
		$('.atf-preloader').fadeOut();
		$('.loader').delay(350).fadeOut('slow'); 
	}); 

	//  Window scroll sticky class add
	function windowScroll() {
		const navbar = document.getElementById("navbar");
		if (
			document.body.scrollTop >= 50 ||
			document.documentElement.scrollTop >= 50
		) {
			navbar.classList.add("header-sticky");
		} else {
			navbar.classList.remove("header-sticky");
		}
	}

	window.addEventListener('scroll', (ev) => {
		ev.preventDefault();
		windowScroll();
	   
	})

	
	// Smooth scroll 
	var scroll = new SmoothScroll('#navbar-scroling a', {
		speed: 300,
		offset: 60
	});

	// Navbar Active Class

	var spy = new Gumshoe('#navbar-scroling a', {
		// Active classes
		navClass: 'active', // applied to the nav list item
		contentClass: 'active', // applied to the content
		offset: 70
	});

	 /* ------------------  NAVBAR TOGGLE ------------------ */
	$('#navbar-scroling').on('click', function() {
		$('.navbar-toggler').toggleClass('active');
		$('.navbar-collapse').toggleClass('show')
	});
	
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});

	
	// Gallery-slider

	var slider = tns({
		container: '.atf-brand-active',
		loop: true,
		autoplay: true,
		nav: false,
		controlsPosition: 'bottom',
		controls: false,
		autoplayButtonOutput: false,
		controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		responsive: {
			1024: {
				gutter: 25,
				items: 4
			},
			768: {
				gutter: 20,
				items: 3
			}
		}
	});
	
// Gallery-slider

	

	// client-slider

	var slider = tns({
		container: '.atf-feature-slider',
		loop: true,
		autoplay: true,
		nav: true,
		controlsPosition: 'bottom',
		controls: false,
		autoplayButtonOutput: false,
	   controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		responsive: {
			1024: {
				gutter: 25,
				items: 3
			},
			768: {
				gutter: 20,
				items: 1
			}
		}
	});

	// client-slider

	var slider = tns({
		container: '.review-slider',
		loop: true,
		autoplay: true,
		nav: false,
		controlsPosition: 'bottom',
		controls: false,
		autoplayButtonOutput: false,
	   controlsText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
		responsive: {
			1024: {
				gutter: 25,
				items: 2
			},
			768: {
				gutter: 20,
				items: 1
			}
		}
	});


	//Counter

	const counter = document.querySelectorAll('.counter_value');
	const speed = 250; // The lower the slower
	counter.forEach(counter_value => {
		const updateCount = () => {
			const target = +counter_value.getAttribute('data-target');
			const count = +counter_value.innerText;
			const inc = target / speed;
			// Check if target is reached
			if (count < target) {
				// Add inc to count and output in counter_value
				counter_value.innerText = (count + inc).toFixed(0);
				// Call function every ms
				setTimeout(updateCount, 1);
			} else {
				counter_value.innerText = target;
			}
		};
		updateCount();
	});
	
	/*START ANIMATION JS*/
		  AOS.init();
		/*END ANIMATION JS*/

	// NICE-SELECT

	$('select').niceSelect();
	
	/* --------------------------------------------------------
             Mailchamp
        --------------------------------------------------------- */

		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
	
})(jQuery);