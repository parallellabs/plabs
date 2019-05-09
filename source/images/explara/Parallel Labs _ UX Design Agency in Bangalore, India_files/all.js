
$(document).ready(function(){
  // sidebar slide
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    $('body').toggleClass('is-scrollhidden');
    $('.sliding-panel-content ul li').each(function(i) {
    var $li = $(this);
    setTimeout(function() {
      $li.toggleClass('animated fadeIn');
    }, i*75); // delay 100 ms
  });
    e.preventDefault();
  });


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

  // if($(window).width() > 601){

  $('.more-options').on('click', function(){

    if($(this).is(":checked")){
      $(".options").addClass("show").slideDown().css({'display':'block'});
    }
    else{
      $(".options").slideUp();
      $(".options").removeClass("show").slideUp();
    }
	});
// }

	// // input counter initialised
	// var input = $("#projectBrief");
	// // var label = $("#thirdForm .group span");
	// var maxVal = 120;
  //
	// input.keyup(function() {
  //   var inputLength = input.val().length;
  //   var counter = $("#counter");
  //
  //   $("#counter").html("");
  //   $("#counter").html(inputLength);
  //
  // 	// if ( inputLength >= maxVal ) {
  // 	//   label.css("background-color", "#F3493D");
  // 	//   label.css("color", "#F3493D");
  // 	// } else {
  // 	//   label.css("background-color", "#2A9AF2");
  // 	//   label.css("color", "#999");
  // 	// }
  // });

  // Keep floating labels active when form inputs and textareas are not empty
  $('#apply_Form .group input, #apply_Form .group textarea').on('change', function() {
    if( $(this).val().length != '' ) { //&& !$(this).hasClass('not-empty')
        $(this).addClass('not-empty');
    } else{
        $(this).removeClass('not-empty');
    }
  });
	// resize banner for mobile
	// if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	// 	var h = $('.height-fix').height();
	// 	$('.height-fix').height(h);
	// }

  // background jump fix for mobile
   var $w = $(window),
    $background = $('.height-fix');

  // Fix background image jump on mobile
  if ((/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    $background.css({'top': 'auto', 'bottom': 0});

    $w.resize(sizeBackground);
    sizeBackground();
  }

  if ((/iPad/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
    //calculating height of section
    var secheight = $('#first-section').height();
    var newheight = secheight * 1.45;
    // console.log(newheight);
    $('#first-section').find('.bg-skewed').css({"height": newheight});
  }

  // $w.resize(function(){
  //   var secheight = $('#first-section').height();
  //   var newheight = secheight * 1.4;
  //   console.log(newheight);
  //   $('#first-section').find('.bg-skewed').css({"height": newheight});
  // })

  function sizeBackground() {
     $background.height(screen.height);
  }
  // image jump fix end

    // // Floating button
    // $(".button-floating").click(function() {
    //     var $wrapper = $("#wrapper");
    //
    //     // if($wrapper.hasClass('available')){
    //         if (!$wrapper.hasClass("button-floating-clicked"))
    //         {
    //             $wrapper.attr("class", "center available");
    //             // $('.btn-overlay').hide();
    //             $wrapper.toggleClass("button-floating-clicked-out");
    //         }
    //     // }
    //
    //     $wrapper.toggleClass("button-floating-clicked ");
    //     // $('.btn-overlay').show();
    //
    //
    //
    //     // $(".button-sub").click(function() {
    //     //     var color = $(this).data("color");
    //
    //     //     $wrapper.attr("class", "center button-floating-clicked button-floating-clicked-out");
    //     //     $wrapper.addClass("button-sub-" + color + "-clicked");
    //     // });
    // });
    //
    // $('.btn-overlay').on('click', function(){
    //     $('#wrapper').removeClass('available');
    //     $('#wrapper').removeClass("button-floating-clicked");
    // });


    // parallex background effect
    // $('#scene').parallax({
    //   calibrateX: false,
    //   calibrateY: true,
    //   invertX: true,
    //   invertY: true,
    //   limitX: false,
    //   limitY: false,
    //   scalarX: 40,
    //   scalarY: 40,
    //   frictionX: 0.01,
    //   frictionY: 0.015,
    //   originX: 0.2,
    //   originY: 0.2
    // });

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

 // ellipsis on trunkate line
  // $(".media-card.small .discription").dotdotdot({
  //   //  configuration goes here
  //   ellipsis  : '... ',
  //   wrap    : 'word'
  // });


}); // End ready

//parallax
$(window).scroll(function(e) {
  if ($("#js-parallax-window").length || $("#js-parallax-window1").length || $("#js-parallax-window2").length
  || $("#js-parallax-window3").length || $("#js-parallax-window4").length || $("#js-parallax-window5").length
  || $("#js-parallax-window6").length || $("#js-parallax-window7").length)
  {
    parallax();
  }
});

function parallax(){

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

  if( $("#js-parallax-window3").length > 0 ) {
    var plxBackground = $("#js-parallax-background3");
    var plxWindow = $("#js-parallax-window3");

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
  if( $("#js-parallax-window4").length > 0 ) {
    var plxBackground = $("#js-parallax-background4");
    var plxWindow = $("#js-parallax-window4");

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
  if( $("#js-parallax-window5").length > 0 ) {
    var plxBackground = $("#js-parallax-background5");
    var plxWindow = $("#js-parallax-window5");

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
  if( $("#js-parallax-window6").length > 0 ) {
    var plxBackground = $("#js-parallax-background6");
    var plxWindow = $("#js-parallax-window6");

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
  if( $("#js-parallax-window7").length > 0 ) {
    var plxBackground = $("#js-parallax-background7");
    var plxWindow = $("#js-parallax-window7");

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


// ellipsis on trunkate line
$(window).on("resize", function (){
  $(".media-card.small .discription").dotdotdot({
    //  configuration goes here
    ellipsis  : '... ',
    wrap    : 'word'
  });
}).resize();


// floating button script on scroll displays
// $(window).scroll(function() {
// 	var target2 = $(".section").offset().top;
// 	if ($(window).scrollTop() >= target2) {
// 		$('#wrapper').addClass('available');
//         // $('.btn-overlay').show();
//
//     }else{
//       $('#wrapper').removeClass('available');
//         // $('.btn-overlay').hide();
//     }
// });

// Check whether view port visible or not
(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)


 // var bLazy = new Blazy({
 //  selector: 'video',
 //  success: function(ele){
      // Image has loaded
      // Do your business here
    $(window).on("scroll touchmove", function(event) {
      if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
          // nothing
      }else{
        $("video").each(function(i, el) {
          // $(this)[0].load();
          if ( $(this).visible(true) ) {
            $(this)[0].play();
            // $(this).lazyLoadXT({show: true});
          } else {
             $(this)[0].pause();

          }
        });
      }
     });
 //    }
 // });


 (function (jQuery) {
   jQuery.mark = {
     jump: function (options) {
       var defaults = {
         selector: '.scroll-on-page-link'
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
