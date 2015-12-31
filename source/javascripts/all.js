
$(document).ready(function(){

	// modal open
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

    // Keep floating labels active when form inputs and textareas are not empty
    $('#apply_Form .group input, #apply_Form .group textarea').on('change', function() {
        if( $(this).val().length != '' && !$(this).hasClass('not-empty')) {
            $(this).addClass('not-empty');
            
        } else{
            $(this).removeClass('not-empty');
        }
    });
	// resize banner for mobile
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		var h = $('.height-fix').height();
		$('.height-fix').height(h);
	}

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
        $('#wrapper').removeClass('available');
        $('#wrapper').removeClass("button-floating-clicked");
    });
    
    // Input range slider
    $('#budget').ionRangeSlider({
        min: 5000,
        max: 50000,
        from: 8000,
        step: 5000,
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


    // parallex background effect
    $('#scene').parallax({
      calibrateX: false,
      calibrateY: true,
      invertX: true,
      invertY: true,
      limitX: false,
      limitY: false,
      scalarX: 40,
      scalarY: 40,
      frictionX: 0.01,
      frictionY: 0.015,
      originX: 0.2,
      originY: 0.2
    });

}); // End ready



// floating button script on scroll displays
$(window).scroll(function() {
	var target2 = $(".section").offset().top;
	if ($(window).scrollTop() >= target2) {
		$('#wrapper').addClass('available');
        // $('.btn-overlay').show();
        
	}else{
		$('#wrapper').removeClass('available');
        // $('.btn-overlay').hide();
	}
});

    var robin = [{text: "Meditation", weight: 9},
        {text: "Pilates", weight: 3},
        {text: "Hiking", weight: 9},
        {text: "Strategy", weight: 5},
        {text: "UX Design", weight: 9},
        {text: "Devil's Advocate", weight: 5},
        {text: "GTD", weight: 3},
        {text: "Coldplay", weight: 5},
        {text: "Vespa", weight: 1},
        {text: "Minimalism", weight: 3},
        {text: "Slack", weight: 1}
    ];

  	var sreenath = [{text: "Silent Mode", weight: 3},
        {text: "Filter Coffee", weight: 9},
        {text: "Xbox", weight: 9},
        {text: "Instagram", weight: 1},
        {text: "Photoshop", weight: 5},
        {text: "Invision", weight: 1},
        {text: "Oneplus", weight: 5},
        {text: "AR Rahman", weight: 9},
        {text: "GSM Arena", weight: 5},
        {text: "Saving Private Ryan", weight: 3},
        {text: "Aloo Paratha", weight: 5},
        {text: "Cricket", weight: 3}
    ];

  	var anup = [{text: "meditate", weight: 3},
        {text: "Filter Coffee", weight: 5},
        {text: "food", weight: 9},
        {text: "Politics", weight: 1},
        {text: "music", weight: 5},
        {text: "Person of Interest", weight: 3},
        {text: "Long Drives", weight: 5},
        {text: "movies", weight: 9},
        {text: "Lord of the rings", weight: 1},
        {text: "trekking", weight: 3},
        {text: "swimming", weight: 9}
    ];

    var Chaitanya = [{text: "UI Designing", weight: 3},
        {text: "Sketching", weight: 3},
        {text: "Photography", weight: 5},
        {text: "Music", weight: 9},
        {text: "Motion Graphics", weight: 1},
        {text: "NFS", weight: 1},
        {text: "GTA 5", weight: 5},
        {text: "Code Geass", weight: 1},
        {text: "XBOX", weight: 9},
        {text: "KFC", weight: 3},
        {text: "Pulpy Orange", weight: 5},
        {text: "Introvert", weight: 1}
    ];

    var Rakesh = [{text: "Cricket", weight: 3},
        {text: "Coke studio", weight: 5},
        {text: "Asphalt", weight: 9},
        {text: "Music", weight: 1},
        {text: "Html5", weight: 5},
        {text: "Relic run", weight: 3},
        {text: "css3", weight: 9},
        {text: "Gym", weight: 3},
        {text: "volley Ball", weight: 1},
        {text: "Traveling", weight: 9},
        {text: "Namste london", weight: 5}
    ];

    $('.cloud_1').jQCloud(robin,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
    $('.cloud_2').jQCloud(sreenath,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
    $('.cloud_3').jQCloud(anup,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
    $('.cloud_4').jQCloud(Chaitanya,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
    $('.cloud_5').jQCloud(Rakesh,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});




	



