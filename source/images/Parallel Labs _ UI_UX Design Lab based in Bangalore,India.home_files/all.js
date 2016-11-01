
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
	$("#counter").html(inputLength + "/140");

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


    // Instafeed call api to fetch latest image
    var userFeed = new Instafeed({
        get: 'user',
        userId: 2056875725,
        accessToken: '2056875725.467ede5.67ad57597a6c4604929cfd63e80e7ec6',
        clientId: '2169821d6d3447d491a47600f8779255',
        limit: 1,
        link: false,
        resolution: 'standard_resolution',
        sortBy: 'most-recent',
        template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
    });
    userFeed.run();

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
      frictionY: 0.01,
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

    var robin = [{text: "Meditation", weight: 3},
        {text: "Pilates", weight: 5},
        {text: "Hiking", weight: 9},
        {text: "Strategy", weight: 1},
        {text: "UX Design", weight: 9},
        {text: "Devil's Advocate", weight: 5},
        {text: "GTD", weight: 3},
        {text: "Coldplay", weight: 1},
        {text: "Vespa", weight: 5},
        {text: "Minimalism", weight: 3},
        {text: "Slack", weight: 9}
    ];

  	var sreenath = [{text: "Silent Mode", weight: 3},
        {text: "Filter Coffee", weight: 5},
        {text: "Xbox", weight: 9},
        {text: "Instagram", weight: 1},
        {text: "Photoshop", weight: 9},
        {text: "Invision", weight: 1},
        {text: "Oneplus", weight: 5},
        {text: "AR Rahman", weight: 3},
        {text: "GSM Arena", weight: 9},
        {text: "Saving Private Ryan", weight: 3},
        {text: "Aloo Paratha", weight: 1},
        {text: "Cricket", weight: 5}
    ];

  	var anup = [{text: "meditate", weight: 3},
        {text: "Filter Coffee", weight: 5},
        {text: "food", weight: 9},
        {text: "Politics", weight: 1},
        {text: "music", weight: 5},
        {text: "Person of Interest", weight: 3},
        {text: "Long Drives", weight: 9},
        {text: "movies", weight: 3},
        {text: "Lord of the rings", weight: 1},
        {text: "trekking", weight: 1},
        {text: "swimming", weight: 5}
    ];

    var Chaitanya = [{text: "UI Designing", weight: 3},
        {text: "Sketching/Drawing", weight: 5},
        {text: "Photography", weight: 9},
        {text: "Music", weight: 1},
        {text: "Motion Graphics", weight: 5},
        {text: "Need for Speed", weight: 3},
        {text: "Grand Theft Auto", weight: 9},
        {text: "Code Geass", weight: 3},
        {text: "XBOX", weight: 1},
        {text: "KFC", weight: 9},
        {text: "Pulpy Orange", weight: 3},
        {text: "Introvert", weight: 5}
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
    $('.cloud_2').jQCloud(sreenath,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
    $('.cloud_3').jQCloud(anup,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
    $('.cloud_4').jQCloud(Chaitanya,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
    $('.cloud_5').jQCloud(Rakesh,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});




	



