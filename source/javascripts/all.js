
$(document).ready(function(){
	
	// background movement
	$('.move-bg').mousemove(function(e){
	    var amountMovedX = (e.pageX * -1 / 2);
	    var amountMovedY = (e.pageY * -1 / 2);
	    $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
	});

	$('.open-form').on('click', function(){
		// $('.main-form').removeClass('back');
		$('.main-form').addClass('openForm-model');
	});

	$('.close-form').on('click', function(){
		$('.main-form').removeClass('openForm-model');
		// $('.main-form').addClass('back');
	});

	// input counter initialised
	  var input = $("#projectBrief");
	  // var label = $("#thirdForm .group span");
	  var maxVal = 120;
	  
	  input.keyup(function() {
	    var inputLength = input.val().length;
	    var counter = $("#counter");
	    
	    $("#counter").html("");
	    $("#counter").html(inputLength + "/120");
	    
	    // if ( inputLength >= maxVal ) {
	    //   label.css("background-color", "#F3493D");
	    //   label.css("color", "#F3493D");
	    // } else {
	    //   label.css("background-color", "#2A9AF2");
	    //   label.css("color", "#999");
	    // }
	  });

	// Input range slider

	// $('input[type="range"]').val(10).change();

	 //  $('input[type="range"]').rangeslider({

		//     // Feature detection the default is `true`.
		//     // Set this to `false` if you want to use
		//     // the polyfill also in Browsers which support
		//     // the native <input type="range"> element.
		//     polyfill: true,

		//     // Default CSS classes
		//     rangeClass: 'rangeslider',
		//     disabledClass: 'rangeslider--disabled',
		//     horizontalClass: 'rangeslider--horizontal',
		//     verticalClass: 'rangeslider--vertical',
		//     fillClass: 'rangeslider__fill',
		//     handleClass: 'rangeslider__handle',

		//     // // Callback function
		//     // onInit: function() {},

		//     // // Callback function
		//     // onSlide: function(position, value) {},

		//     // // Callback function
		//     // onSlideEnd: function(position, value) {}
		// });
	$('#budget').ionRangeSlider({
        min: 10000,
        max: 80000,
        from: 20000,
        step: 10000,
        grid: false,
        keyboard: true,
        grid_snap: false,
        force_edges: true,
        prefix: '$',
        min_prefix: '< ',
        max_postfix: '+',
        decorate_both: false,
        prettify_enabled: true,
        prettify_separator: ','
    });

});


// floating button script on scroll displays
$(window).scroll(function() {
	var target2 = $(".section").offset().top;
	if ($(window).scrollTop() >= target2) {
		$('#container-floating').css('visibility', 'visible');
	}else{
		$('#container-floating').css('visibility', 'hidden');
	}
});




