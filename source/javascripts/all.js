
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

    // File input text append to button
    $( '.inputfile' ).each( function(){

        var $input   = $( this ),
        $label   = $input.next( 'label' ),
        labelVal = $label.html();

        $input.on( 'change', function( e )
        {
            var fileName = '';

            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else if( e.target.value )
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                $label.find( 'span' ).html( fileName );
            else
                $label.html( labelVal );
        });

        // Firefox bug fix
        $input
        .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
        .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });

    // Dribbble shots
    $.jribbble.setToken('957e5172d18eca8e1fc96256a7c1d69a7a0e40e1c8c42babeb8f19d51eeab95c');

    /*
      Jribbble methods make ajax requests to the Dribbble API. When
      the requests complete, a Promise is returned. Use `then` to take an action
      on the response from the server.
      */
      $.jribbble.teams('parallellabs').shots({
        'per_page': 1,
        'sort': 'recent'
      }).then(function(shots) {
        var html = [];

        shots.forEach(function(shot) {
        // See the Dribbble docs for all available shot properties.
        html.push('<a target="_blank" href="' + shot.html_url + '">');
        html.push('<img src="' + shot.images.hidpi + '">');
        html.push('</a>');
        $('.dribbble .left .content h2').html(shot.title);
        $('.dribbble .discription').html(shot.description);
    });
        $('.shots').html(html.join(''));
     }); // end

// sidebar slide
 $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });

 // ellipsis on trunkate line
  // $(".media-card.small .discription").dotdotdot({
  //   //  configuration goes here
  //   ellipsis  : '... ',
  //   wrap    : 'word'
  // });

// parallax
  if ($("#js-parallax-window").length || $("#js-parallax-window1").length || $("#js-parallax-window2").length) {
    parallax();
  }

}); // End ready

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length || $("#js-parallax-window1").length || $("#js-parallax-window2").length) {
    parallax();
  }
});
function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }

  if( $("#js-parallax-window1").length > 0 ) {
    var plxBackground = $("#js-parallax-background1");
    var plxWindow = $("#js-parallax-window1");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }

  if( $("#js-parallax-window2").length > 0 ) {
    var plxBackground = $("#js-parallax-background2");
    var plxWindow = $("#js-parallax-window2");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }

}

(function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
    };
    if (typeof options == 'string') {
        defaults.selector = options;
    }

    options = jQuery.extend(defaults, options);
    return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
      }, thespeed, 'swing');
        e.preventDefault();
    });
}
};
})(jQuery);


jQuery(function(){  
  jQuery.mark.jump();
});


// ellipsis on trunkate line
$(window).on("resize", function (){
  $(".media-card.small .discription").dotdotdot({
    //  configuration goes here
    ellipsis  : '... ',
    wrap    : 'word'
  });
}).resize();


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


(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

$(window).scroll(function(event) {

  $("video").each(function(i, el) {
    if ( $(this).visible(true) ) {
      $(this)[0].play();
  } else {
     $(this)[0].pause();
 }
});

});



// cloud tag
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

var Bhaghya = [{text: "reeses", weight: 5},
{text: "cartooning", weight: 9},
{text: "books", weight: 1},
{text: "chumma", weight: 5},
{text: "edm", weight: 3},
{text: "stationery", weight: 5},
{text: "cheesecake", weight: 9},
{text: "vlogs", weight: 1},
{text: "animals before humans", weight: 3}
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
{text: "Namaste london", weight: 5}
];

var Vish = [{text: "Minimalist", weight: 3},
{text: "swimmer", weight: 5},
{text: "Netflix", weight: 9},
{text: "iOS", weight: 1},
{text: "Gajar ka halwa", weight: 5},
{text: "Alternate rock", weight: 3},
{text: "Traveller", weight: 9},
{text: "Books", weight: 3},
{text: "startups", weight: 1}
];

var Devshree = [{text: "Party enthusiast", weight: 3},
{text: "wanderlust", weight: 9},
{text: "dancer", weight: 9},
{text: "paani puri", weight: 1},
{text: "extrovert", weight: 5},
{text: "hyper", weight: 1},
{text: "doodling", weight: 5},
{text: "half Sandwich", weight: 9},
{text: "passionate", weight: 5},
{text: "above and beyond", weight: 3}
];

var Allan = [{text: "Music", weight: 5},
{text: "Coffee", weight: 3},
{text: "Football", weight: 5},
{text: "Travelling", weight: 9},
{text: "Goan Fish Curry", weight: 5},
{text: "HTML", weight: 1},
{text: "CSS3", weight: 5},
{text: "Nexus", weight: 9}
];

var Ameya = [{text: "Sketching", weight: 5},
{text: "GYM", weight: 9},
{text: "trekking", weight: 1},
{text: "Pets", weight: 5},
{text: "Tea addict", weight: 3},
{text: "Chatterbox", weight: 5},
{text: "Dhol Tasha", weight: 9},
{text: "UX Design", weight: 1},
{text: "Gadget Freak", weight: 3},
{text: "Hardcore gamer", weight: 5}
];

$('.cloud_1').jQCloud(robin,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
$('.cloud_2').jQCloud(sreenath,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
$('.cloud_3').jQCloud(Bhaghya,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
$('.cloud_4').jQCloud(Chaitanya,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
$('.cloud_5').jQCloud(Rakesh,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
$('.cloud_6').jQCloud(Vish,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
$('.cloud_7').jQCloud(Devshree,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});
$('.cloud_8').jQCloud(Allan,{height:200,autoResize: true,removeOverflowing: false,shape: 'rectangular'});
$('.cloud_9').jQCloud(Ameya,{height:200,autoResize: true,removeOverflowing: true,shape: 'rectangular'});







