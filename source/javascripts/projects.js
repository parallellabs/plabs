// // On scroll Blur effect
// $(window).scroll(function() {
// 	var target2 = $(".section").offset().top;
//
// 	// Floating button script on scroll displays
// 	if ($(window).scrollTop() >= target2){
// 		$('#wrapper').addClass('available');
// 	}else{
// 		$('#wrapper').removeClass('available');
// 	}
//
// 	if ($(window).scrollTop() >= ($(".blur-container").offset().top - 10)) {
// 		$('.blurred-img').css('opacity', '+=1');
// 		$('.blur-container .content .conversetion').addClass('start');
// 		$('.blur-container .content .design-goals').show('slow');
// 		// $('body').addClass('overflow-H').delay(2000).removeClass('overflow-H');
// 		$('.conversetion.start').each(function(i){
// 			var that = $(this);
// 			setTimeout(function () {
// 				that.find('.user').addClass('animate');
// 				that.find('.message').css('opacity', '+=1');
// 				// that.find('.message').addClass('strech-msg');
// 			}, 300 * i );
// 		});
//
// 	}
//
//
// }); //end

$(document).ready(function(){
	// sidebar slide
	// $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
	// 	$('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
	// 	$('.sliding-panel-button').toggle();
	// 	$('.sliding-panel-content ul li').each(function(i) {
	// 	var $li = $(this);
	// 	setTimeout(function() {
	// 		$li.toggleClass('animated fadeIn');
	// 	}, i*75); // delay 100 ms
	// });
	// 	e.preventDefault();
	// });
	// horizontal slide image script
	// $('#changeMe').on('mousedown', function(e){
	// 	var $dragable = $(this).parent(),
	// 	startWidth = $dragable.width(),
	// 	pX = e.pageX;
	// 	$(document).on('mouseup', function(e){
	// 		$(document).off('mouseup').off('mousemove');
	// 	});
	// 	$(document).on('mousemove', function(me){
	// 		var mx = (me.pageX - pX);
 //                //var my = (me.pageY - pY);
 //                $dragable.css({right: mx / 2,width: startWidth + mx,
 //                //top: my
 //            });
 //        });
	// }); //end

	// // input counter initialised
	// var input = $("#projectBrief");
	// // var label = $("#thirdForm .group span");
	// var maxVal = 120;
	//
	// input.keyup(function() {
	// var inputLength = input.val().length;
	// var counter = $("#counter");
	//
	// $("#counter").html("");
	// $("#counter").html(inputLength);
	//
	// // if ( inputLength >= maxVal ) {
	// //   label.css("background-color", "#F3493D");
	// //   label.css("color", "#F3493D");
	// // } else {
	// //   label.css("background-color", "#2A9AF2");
	// //   label.css("color", "#999");
	// // }
	// });

 	// resize banner for mobile
	// if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	var h = $('.height-fix').height();
	// 	$('.height-fix').height(h);
	// }

	// modal open
	$('.open-form').on('click', function(){
    $(this).parents('body').addClass('overflow-H');
    if($(this).parents('body').hasClass('overflow-H')){
      $('.home').addClass('blur');
  		$('.main-form').addClass('openForm-model');
    }
	});
	// modal close
	$('.close-form').on('click', function(){
    $(this).parents('body').removeClass('overflow-H');
    $('.home').removeClass('blur');
		$('.main-form').removeClass('openForm-model');
	});

	//  // Floating button
  //   $(".button-floating").click(function() {
  //       var $wrapper = $("#wrapper");
	 //
  //       // if($wrapper.hasClass('available')){
  //           if (!$wrapper.hasClass("button-floating-clicked"))
  //           {
  //               $wrapper.attr("class", "center available");
  //               // $('.btn-overlay').hide();
  //               $wrapper.toggleClass("button-floating-clicked-out");
  //           }
  //       // }
	 //
  //       $wrapper.toggleClass("button-floating-clicked ");
  //       // $('.btn-overlay').show();
	 //
	 //
	 //
  //       // $(".button-sub").click(function() {
  //       //     var color = $(this).data("color");
	 //
  //       //     $wrapper.attr("class", "center button-floating-clicked button-floating-clicked-out");
  //       //     $wrapper.addClass("button-sub-" + color + "-clicked");
  //       // });
  //   });
	 //
  //   $('.btn-overlay').on('click', function(){
  //       // $('#wrapper').removeClass('available');
  //       $('#wrapper').removeClass("button-floating-clicked");
  //   });
		$("#screen-slider").owlCarousel({
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			responsive : {
			    // breakpoint from 0 up
			    0 : {
			    	items: 1,
			    	autoplay: true
			    },

			    768 : {
					items: 3
			    },

			    1024 : {
			    	items: 5
			    }
			}
		});

		$("#citrus-slider").owlCarousel({
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			responsive : {
			    // breakpoint from 0 up
			    0 : {
			    	items: 1,
			    	autoplay: true
			    },

			    768 : {
					items: 3
			    },

			    1024 : {
			    	items: 4
			    }
			}
		});


		$("#boomer-sprint-slider").owlCarousel({
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			responsive : {
			    // breakpoint from 0 up
			    0 : {
			    	items: 1,
			    	autoplay: true
			    },

			    768 : {
					items: 3
			    }
			}
		});


		$("#enchanting-testimonial-slider").owlCarousel({
			nav : true, // Show next and prev buttons
			navText: ["<img class='owl-nav-prev' src='images/icons8-left_4.svg'>","<img class='owl-nav-next' src='images/icons8-right_4.svg'>"],
			slideSpeed : 300,
			paginationSpeed : 400,
			responsive:{
				0:{
						items:1
				}
			}

		});

		$("#center-slider").owlCarousel({
			navigation : true, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
			// autoPlay: true,
			dots: true
		});

      $("#parallax-slider").owlCarousel({
          nav : false, // Show next and prev buttons
          items: 1,
          slideSpeed : 200,
          paginationSpeed : 200,
          autoplay: true
       });


	// slider initialisation
	$('#sky-carousel').carousel({
		itemWidth: 700,
		itemHeight: 500,
		distance: 5,
		enableMouseWheel: false,
		navigationButtonsVisible: false,
		selectedItemDistance: 50,
		selectedItemZoomFactor: 1,
		unselectedItemZoomFactor: 0.67,
		unselectedItemAlpha: 0.6,
		motionStartDistance: 170,
		topMargin: 10,
		gradientStartPoint: 0,
		gradientOverlayColor: "#f1f5f9",
		gradientOverlaySize: 0,
		gradientOverlayVisible: false,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: false
	});

	$('#sky-carousel-2').carousel({
		itemWidth: 300,
		itemHeight: 280,
		distance: 60,
		slideSpeed: 0.75,
		loop: true,
		enableMouseWheel: false,
		navigationButtonsVisible: true,
		selectedItemDistance: 50,
		selectedItemZoomFactor: 1,
		unselectedItemZoomFactor: 0.67,
		unselectedItemAlpha: 0.6,
		motionStartDistance: 170,
		topMargin: 0,
		gradientStartPoint: 0,
		gradientOverlayColor: "#f1f5f9",
		gradientOverlaySize: 0,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: false
	});

var width = $(window).width();
if(width > 769){
	$('#sky-carousel-3').carousel({
		itemWidth: 718,
		itemHeight: 514,
		distance: 250,
		slideSpeed: 0.75,
		loop: true,
		enableMouseWheel: false,
		navigationButtonsVisible: true,
		selectedItemDistance: 50,
		selectedItemZoomFactor: 1,
		unselectedItemZoomFactor: 0.67,
		unselectedItemAlpha: 0.6,
		motionStartDistance: 170,
		topMargin: 0,
		gradientStartPoint: 0,
		gradientOverlayColor: "#f1f5f9",
		gradientOverlaySize: 0,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: false
	});
}else{
		$('#sky-carousel-3').carousel({
			itemWidth: 318,
			itemHeight: 200,
			distance: 50
		});
}

})
