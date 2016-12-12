// On scroll Blur effect
$(window).scroll(function() {
	var target2 = $(".section").offset().top;

	// Floating button script on scroll displays
	if ($(window).scrollTop() >= target2){
		$('#wrapper').addClass('available');
	}else{
		$('#wrapper').removeClass('available');
	}

	if ($(window).scrollTop() >= ($(".blur-container").offset().top - 10)) {
		$('.blurred-img').css('opacity', '+=1');
		$('.blur-container .content .conversetion').addClass('start');
		$('.blur-container .content .design-goals').show('slow');
		// $('body').addClass('overflow-H').delay(2000).removeClass('overflow-H');
		$('.conversetion.start').each(function(i){
			var that = $(this);
			setTimeout(function () {
				that.find('.user').addClass('animate');
				that.find('.message').css('opacity', '+=1');
				// that.find('.message').addClass('strech-msg');
			}, 300 * i );
		});

	}


}); //end

$(document).ready(function(){
  // sidebar slide
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
	// horizontal slide image script
	$('#changeMe').on('mousedown', function(e){
		var $dragable = $(this).parent(),
		startWidth = $dragable.width(),
		pX = e.pageX;
		$(document).on('mouseup', function(e){
			$(document).off('mouseup').off('mousemove');
		});
		$(document).on('mousemove', function(me){
			var mx = (me.pageX - pX);
                //var my = (me.pageY - pY);
                $dragable.css({right: mx / 2,width: startWidth + mx,
                //top: my
            });
        });
	}); //end

	// input counter initialised
	var input = $("#projectBrief");
	// var label = $("#thirdForm .group span");
	var maxVal = 120;

	input.keyup(function() {
	var inputLength = input.val().length;
	var counter = $("#counter");

	$("#counter").html("");
	$("#counter").html(inputLength);

	// if ( inputLength >= maxVal ) {
	//   label.css("background-color", "#F3493D");
	//   label.css("color", "#F3493D");
	// } else {
	//   label.css("background-color", "#2A9AF2");
	//   label.css("color", "#999");
	// }
	});

 	// resize banner for mobile
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var h = $('.height-fix').height();
		$('.height-fix').height(h);
	}

	// Form modal open
	$('.open-form').on('click', function(){
		// $('.main-form').removeClass('back');
		$('.main-form').addClass('openForm-model');
		$(this).parents('html').addClass('overflow-H');
		$(this).parents('body').addClass('overflow-H');
	});
	// modal close
	$('.close-form').on('click', function(){
		$('.main-form').removeClass('openForm-model');
		$(this).parents('html').removeClass('overflow-H');
		$(this).parents('body').removeClass('overflow-H');
		// $('.main-form').addClass('back');
	});

	 // Floating button
    $(".button-floating").click(function() {
        var $wrapper = $("#wrapper");

        // if($wrapper.hasClass('available')){
            if (!$wrapper.hasClass("button-floating-clicked"))
            {
                $wrapper.attr("class", "center available");
                // $('.btn-overlay').hide();
                $wrapper.toggleClass("button-floating-clicked-out");
            }
        // }

        $wrapper.toggleClass("button-floating-clicked ");
        // $('.btn-overlay').show();



        // $(".button-sub").click(function() {
        //     var color = $(this).data("color");

        //     $wrapper.attr("class", "center button-floating-clicked button-floating-clicked-out");
        //     $wrapper.addClass("button-sub-" + color + "-clicked");
        // });
    });

    $('.btn-overlay').on('click', function(){
        // $('#wrapper').removeClass('available');
        $('#wrapper').removeClass("button-floating-clicked");
    });




		$("#screen-slider").owlCarousel({
			navigation : false, // Show next and prev buttons
			slideSpeed : 300,
			paginationSpeed : 400,
			singleItem:true,
		});

	// slider initialisetion
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
		gradientStartPoint: 0.35,
		gradientOverlayColor: "#f1f5f9",
		gradientOverlaySize: 190,
		gradientOverlayVisible: false,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: true
	});

	$('#sky-carousel-2').carousel({
		itemWidth: 300,
		itemHeight: 280,
		distance: 30,
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
		gradientStartPoint: 0.35,
		gradientOverlayColor: "#f1f5f9",
		gradientOverlaySize: 110,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: true
	});

	$('#sky-carousel-3').carousel({
		itemWidth: 600,
		itemHeight: 550,
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
		gradientStartPoint: 0.35,
		gradientOverlayColor: "#f1f5f9",
		gradientOverlaySize: 110,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: true
	});

	// Input range slider
    $('#budget').ionRangeSlider({
        min: 3000,
        max: 20000,
        from: 6000,
        step: 3000,
        grid: false,
        keyboard: true,
        grid_snap: false,
        force_edges: true,
        prefix: '$',
        min_prefix: false,
        max_postfix: false,
        decorate_both: false,
        prettify_enabled: true,
        prettify_separator: ','
    });

})
