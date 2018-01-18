
$(document).ready(function(){
  // sidebar slide
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    $('.sliding-panel-content ul li').each(function(i) {
    var $li = $(this);
    setTimeout(function() {
      $li.toggleClass('animated fadeIn');
    }, i*75); // delay 100 ms
  });
    e.preventDefault();
  });

  // $(window).scroll(function() {

  //   var headerHeight = $('.top-navbar').outerHeight();

  //   if ($(this).scrollTop() > 86){
  //       $('.top-navbar').addClass("sticky");
  //     }
  //     else{
  //       $('.top-navbar').removeClass("sticky");
  //     }
  // });

	// modal open
	$('.open-form').on('click', function(){
    $(this).parents('body').addClass('overflow-H');
    if($(this).parents('body').hasClass('overflow-H')){
      //$('.home').addClass('blur');
  		$('.main-form').addClass('openForm-model');
      $('.main-form .overlay').addClass('open');
      $('#firstBox').addClass('animated fade-in');

      var objHeight = $(window).height() * 0.2;
      $('#objective').css("max-height", objHeight + 'px');
      // $('.inner-box').removeAttr('style');
      // $('#firstBox').css({'z-index':'3'});
    }
	});
	// modal close
	$('.close-form').on('click', function(){
    $(this).parents('body').removeClass('overflow-H');
    //$('.home').removeClass('blur');
		$('.main-form').removeClass('openForm-model');
    $('.main-form .inner-box').removeClass('animated fade-in');
    $('.main-form .overlay').removeClass('open');
	});

  var detailsFlag = false;

  if( $('#clientName').val().length > 0 && $('#email').val().length > 0)
  {
    detailsFlag = true;
  }
  else {
    detailsFlag = false;
  }

  if(detailsFlag == true)
  {
    $('.send').addClass('active');
  }
  else {
    $('.send').removeClass('active');
  }

  $('#secondForm input').on('blur keydown', function(){
    var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    var mobiReg = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    var mail = $('#email').val();
    var mobile = $('#mobileNumber').val();
    if( $('#clientName').val().length > 0 && emailReg.test(mail) && mobile.length > 0 && $('#company').val().length > 0)
    {
      detailsFlag = true;
    }
    else {
      detailsFlag = false;
    }
    if(detailsFlag == true)
    {
      $('.send').addClass('active');
    }
    else {
      $('.send').removeClass('active');
    }
	});

  var detailsFlagFirst = false;

  if( $('#objective').val().length > 0 )
  {
    detailsFlagFirst = true;
  }
  else {
    detailsFlagFirst = false;
  }
  var prjtCheckbox = $( "input[name='prjt_type']:checked" ).length;
  $('#firstForm input,#firstForm textarea').on('change blur keyup', function(){
    var prjtCheckbox = $( "input[name='prjt_type']:checked" ).length;
    if( $('textarea#objective').val() != '' && prjtCheckbox > 0)
    {
      detailsFlagFirst = true;
    }
    else {
      detailsFlagFirst = false;
    }
    if(detailsFlagFirst == true)
    {
      $('#firstForm .btn').addClass('active');
    }
    else {
      $('#firstForm .btn').removeClass('active');
    }
});

$('#firstForm input').on('focus', function(){
  if( $('textarea#objective').val() != '')
  {
    $('#objective').parent().removeClass('error');
  }
  else {
    $('#objective').parent().addClass('error');
  }
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

  $(".group input,.group textarea").on('keyup blur',function(){

    var inputLength = $(this).val().length;
    if(inputLength > 0)
    {

      $(this).parent().find('label').addClass('active-input');
    }
    else {
      $(this).parent().find('label').removeClass('active-input');
    }
  });

  // Keep floating labels active when form inputs and textareas are not empty
  $('#apply_Form .group input, #apply_Form .group textarea').on('change', function() {
    if( $(this).val().length != '' ) { //&& !$(this).hasClass('not-empty')
        $(this).addClass('not-empty');
    } else{
        $(this).removeClass('not-empty');
    }
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

    $('textarea.autogrow-text').each(function () {
      this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:auto;');
    }).on('input', function () {

      var formHeight = $(this).parents('.inner-box').outerHeight();
      var windowHeight = $(window).height();
      var scrollHeight = this.scrollHeight;
      if(this.scrollHeight < 70)
      {
        this.style.height = 'auto';
        this.style.height = '49px';
      }
      else {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
      }

    });


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

// Check whether view port visible or not
// (function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)


 // var bLazy = new Blazy({
  // selector: 'video',
  // success: function(ele){
      // Image has loaded
      // Do your business here
    // $(window).on("scroll touchmove", function(event) {
    //   if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
    //       // nothing
    //   }else{
    //     $("video").each(function(i, el) {
    //       // $(this)[0].load();
    //       if ( $(el).visible(true) ) {
    //         $(el)[0].play();
    //         // $(this).lazyLoadXT({show: true});
    //       } else {
    //         //console.log($(this).attr('id'));
    //          $(el)[0].pause();

    //       }
    //     });
    //   }
    //  });
    // }
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

//  var promise = document.querySelector('video').play();
// console.log(promise);
// if (promise !== undefined) {
//   promise.then(_ => {
//     // Autoplay started!
//     console.log("started!");
//   }).catch(error => {
//     // Autoplay was prevented.
//     // Show a "Play" button so that user can start playback.
//     console.log("not playing");
//   });
// }

// var ta = document.querySelector('.autogrow-text');
//
// ta.addEventListener('autosize:resized', function(){
//
//   console.log('textarea height updated');
// });
