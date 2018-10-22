// /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
//  * @license MIT */

// ;(function(root, factory) {

//   if (typeof define === 'function' && define.amd) {
//     define(factory);
//   } else if (typeof exports === 'object') {
//     module.exports = factory();
//   } else {
//     root.NProgress = factory();
//   }

// })(this, function() {
//   var NProgress = {};

//   NProgress.version = '0.2.0';

//   var Settings = NProgress.settings = {
//     minimum: 0.08,
//     easing: 'linear',
//     positionUsing: '',
//     speed: 200,
//     trickle: true,
//     trickleSpeed: 200,
//     showSpinner: true,
//     barSelector: '[role="bar"]',
//     spinnerSelector: '[role="spinner"]',
//     parent: 'body',
//     template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
//   };

//   /**
//    * Updates configuration.
//    *
//    *     NProgress.configure({
//    *       minimum: 0.1
//    *     });
//    */
//   NProgress.configure = function(options) {
//     var key, value;
//     for (key in options) {
//       value = options[key];
//       if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
//     }

//     return this;
//   };

//   /**
//    * Last number.
//    */

//   NProgress.status = null;

//   /**
//    * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
//    *
//    *     NProgress.set(0.4);
//    *     NProgress.set(1.0);
//    */

//   NProgress.set = function(n) {
//     var started = NProgress.isStarted();

//     n = clamp(n, Settings.minimum, 1);
//     NProgress.status = (n === 1 ? null : n);

//     var progress = NProgress.render(!started),
//         bar      = progress.querySelector(Settings.barSelector),
//         speed    = Settings.speed,
//         ease     = Settings.easing;

//     progress.offsetWidth; /* Repaint */

//     queue(function(next) {
//       // Set positionUsing if it hasn't already been set
//       if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

//       // Add transition
//       css(bar, barPositionCSS(n, speed, ease));

//       if (n === 1) {
//         // Fade out
//         css(progress, {
//           transition: 'none',
//           opacity: 1
//         });
//         progress.offsetWidth; /* Repaint */

//         setTimeout(function() {
//           css(progress, {
//             transition: 'all ' + speed + 'ms linear',
//             opacity: 0
//           });
//           setTimeout(function() {
//             NProgress.remove();
//             next();
//           }, speed);
//         }, speed);
//       } else {
//         setTimeout(next, speed);
//       }
//     });

//     return this;
//   };

//   NProgress.isStarted = function() {
//     return typeof NProgress.status === 'number';
//   };

//   /**
//    * Shows the progress bar.
//    * This is the same as setting the status to 0%, except that it doesn't go backwards.
//    *
//    *     NProgress.start();
//    *
//    */
//   NProgress.start = function() {
//     if (!NProgress.status) NProgress.set(0);

//     var work = function() {
//       setTimeout(function() {
//         if (!NProgress.status) return;
//         NProgress.trickle();
//         work();
//       }, Settings.trickleSpeed);
//     };

//     if (Settings.trickle) work();

//     return this;
//   };

//   /**
//    * Hides the progress bar.
//    * This is the *sort of* the same as setting the status to 100%, with the
//    * difference being `done()` makes some placebo effect of some realistic motion.
//    *
//    *     NProgress.done();
//    *
//    * If `true` is passed, it will show the progress bar even if its hidden.
//    *
//    *     NProgress.done(true);
//    */

//   NProgress.done = function(force) {
//     if (!force && !NProgress.status) return this;

//     return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
//   };

//   /**
//    * Increments by a random amount.
//    */

//   NProgress.inc = function(amount) {
//     var n = NProgress.status;

//     if (!n) {
//       return NProgress.start();
//     } else if(n > 1) {
//       return;
//     } else {
//       if (typeof amount !== 'number') {
//         if (n >= 0 && n < 0.2) { amount = 0.1; }
//         else if (n >= 0.2 && n < 0.5) { amount = 0.04; }
//         else if (n >= 0.5 && n < 0.8) { amount = 0.02; }
//         else if (n >= 0.8 && n < 0.99) { amount = 0.005; }
//         else { amount = 0; }
//       }

//       n = clamp(n + amount, 0, 0.994);
//       return NProgress.set(n);
//     }
//   };

//   NProgress.trickle = function() {
//     return NProgress.inc();
//   };

//   /**
//    * Waits for all supplied jQuery promises and
//    * increases the progress as the promises resolve.
//    *
//    * @param $promise jQUery Promise
//    */
//   (function() {
//     var initial = 0, current = 0;

//     NProgress.promise = function($promise) {
//       if (!$promise || $promise.state() === "resolved") {
//         return this;
//       }

//       if (current === 0) {
//         NProgress.start();
//       }

//       initial++;
//       current++;

//       $promise.always(function() {
//         current--;
//         if (current === 0) {
//             initial = 0;
//             NProgress.done();
//         } else {
//             NProgress.set((initial - current) / initial);
//         }
//       });

//       return this;
//     };

//   })();

//   /**
//    * (Internal) renders the progress bar markup based on the `template`
//    * setting.
//    */

//   NProgress.render = function(fromStart) {
//     if (NProgress.isRendered()) return document.getElementById('nprogress');

//     addClass(document.documentElement, 'nprogress-busy');

//     var progress = document.createElement('div');
//     progress.id = 'nprogress';
//     progress.innerHTML = Settings.template;

//     var bar      = progress.querySelector(Settings.barSelector),
//         perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
//         parent   = document.querySelector(Settings.parent),
//         spinner;

//     css(bar, {
//       transition: 'all 0 linear',
//       transform: 'translate3d(' + perc + '%,0,0)'
//     });

//     if (!Settings.showSpinner) {
//       spinner = progress.querySelector(Settings.spinnerSelector);
//       spinner && removeElement(spinner);
//     }

//     if (parent != document.body) {
//       addClass(parent, 'nprogress-custom-parent');
//     }

//     parent.appendChild(progress);
//     return progress;
//   };

//   /**
//    * Removes the element. Opposite of render().
//    */

//   NProgress.remove = function() {
//     removeClass(document.documentElement, 'nprogress-busy');
//     removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
//     var progress = document.getElementById('nprogress');
//     progress && removeElement(progress);
//   };

//   /**
//    * Checks if the progress bar is rendered.
//    */

//   NProgress.isRendered = function() {
//     return !!document.getElementById('nprogress');
//   };

//   /**
//    * Determine which positioning CSS rule to use.
//    */

//   NProgress.getPositioningCSS = function() {
//     // Sniff on document.body.style
//     var bodyStyle = document.body.style;

//     // Sniff prefixes
//     var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
//                        ('MozTransform' in bodyStyle) ? 'Moz' :
//                        ('msTransform' in bodyStyle) ? 'ms' :
//                        ('OTransform' in bodyStyle) ? 'O' : '';

//     if (vendorPrefix + 'Perspective' in bodyStyle) {
//       // Modern browsers with 3D support, e.g. Webkit, IE10
//       return 'translate3d';
//     } else if (vendorPrefix + 'Transform' in bodyStyle) {
//       // Browsers without 3D support, e.g. IE9
//       return 'translate';
//     } else {
//       // Browsers without translate() support, e.g. IE7-8
//       return 'margin';
//     }
//   };

//   /**
//    * Helpers
//    */

//   function clamp(n, min, max) {
//     if (n < min) return min;
//     if (n > max) return max;
//     return n;
//   }

//   /**
//    * (Internal) converts a percentage (`0..1`) to a bar translateX
//    * percentage (`-100%..0%`).
//    */

//   function toBarPerc(n) {
//     return (-1 + n) * 100;
//   }


//   /**
//    * (Internal) returns the correct CSS for changing the bar's
//    * position given an n percentage, and speed and ease from Settings
//    */

//   function barPositionCSS(n, speed, ease) {
//     var barCSS;

//     if (Settings.positionUsing === 'translate3d') {
//       barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
//     } else if (Settings.positionUsing === 'translate') {
//       barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
//     } else {
//       barCSS = { 'margin-left': toBarPerc(n)+'%' };
//     }

//     barCSS.transition = 'all '+speed+'ms '+ease;

//     return barCSS;
//   }

//   /**
//    * (Internal) Queues a function to be executed.
//    */

//   var queue = (function() {
//     var pending = [];

//     function next() {
//       var fn = pending.shift();
//       if (fn) {
//         fn(next);
//       }
//     }

//     return function(fn) {
//       pending.push(fn);
//       if (pending.length == 1) next();
//     };
//   })();

//   /**
//    * (Internal) Applies css properties to an element, similar to the jQuery
//    * css method.
//    *
//    * While this helper does assist with vendor prefixed property names, it
//    * does not perform any manipulation of values prior to setting styles.
//    */

//   var css = (function() {
//     var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
//         cssProps    = {};

//     function camelCase(string) {
//       return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
//         return letter.toUpperCase();
//       });
//     }

//     function getVendorProp(name) {
//       var style = document.body.style;
//       if (name in style) return name;

//       var i = cssPrefixes.length,
//           capName = name.charAt(0).toUpperCase() + name.slice(1),
//           vendorName;
//       while (i--) {
//         vendorName = cssPrefixes[i] + capName;
//         if (vendorName in style) return vendorName;
//       }

//       return name;
//     }

//     function getStyleProp(name) {
//       name = camelCase(name);
//       return cssProps[name] || (cssProps[name] = getVendorProp(name));
//     }

//     function applyCss(element, prop, value) {
//       prop = getStyleProp(prop);
//       element.style[prop] = value;
//     }

//     return function(element, properties) {
//       var args = arguments,
//           prop,
//           value;

//       if (args.length == 2) {
//         for (prop in properties) {
//           value = properties[prop];
//           if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
//         }
//       } else {
//         applyCss(element, args[1], args[2]);
//       }
//     }
//   })();

//   /**
//    * (Internal) Determines if an element or space separated list of class names contains a class name.
//    */

//   function hasClass(element, name) {
//     var list = typeof element == 'string' ? element : classList(element);
//     return list.indexOf(' ' + name + ' ') >= 0;
//   }

//   /**
//    * (Internal) Adds a class to an element.
//    */

//   function addClass(element, name) {
//     var oldList = classList(element),
//         newList = oldList + name;

//     if (hasClass(oldList, name)) return;

//     // Trim the opening space.
//     element.className = newList.substring(1);
//   }

//   /**
//    * (Internal) Removes a class from an element.
//    */

//   function removeClass(element, name) {
//     var oldList = classList(element),
//         newList;

//     if (!hasClass(element, name)) return;

//     // Replace the class name.
//     newList = oldList.replace(' ' + name + ' ', ' ');

//     // Trim the opening and closing spaces.
//     element.className = newList.substring(1, newList.length - 1);
//   }

//   /**
//    * (Internal) Gets a space separated list of the class names on the element.
//    * The list is wrapped with a single space on each end to facilitate finding
//    * matches within the list.
//    */

//   function classList(element) {
//     return (' ' + (element && element.className || '') + ' ').replace(/\s+/gi, ' ');
//   }

//   /**
//    * (Internal) Removes an element from the DOM.
//    */

//   function removeElement(element) {
//     element && element.parentNode && element.parentNode.removeChild(element);
//   }

//   return NProgress;
// });

// $(window).load(function(){
//    NProgress.done();
// });

$(document).ready(function(){
  //NProgress.start();
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

  if((navigator.userAgent.match(/iPad|iPhone/i)) && (navigator.userAgent.match(/iPad|iPhone/i)!= null)){
          $('video').prop("controls",true);
  }
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

      //$('.inner-box').css({'z-index':'2'}).removeClass('animated fade-in');
      // if($(window).width() <= 480 )
      // {
      //   $('#secondBox').addClass('animated fade-in');
      // }
      // else {
      //   $('#firstBox').addClass('animated fade-in');
      // }
      $('#firstBox').addClass('animated fade-in');

      // var objHeight = $(window).height() * 0.2;
      // $('#objective').css("max-height", objHeight + 'px');
      // $('.inner-box').removeAttr('style');
      // $('#firstBox').css({'z-index':'3'});
    }
	});
	// modal close
	$('.close-form').on('click', function(){
    $(this).parents('body').removeClass('overflow-H');
    $('.main-form .overlay').removeClass('open');
		$('.main-form').removeClass('openForm-model');
    $('.main-form .inner-box').removeClass('animated fade-in');
  });

  $(".test-button .text").hover(function(){
    $(".test-button").addClass('active');
    }, function(){
    $(".test-button").removeClass('active');
  });

  $(".get-in-touch .text").hover(function(){
    $(".get-in-touch").addClass('active');
    }, function(){
    $(".get-in-touch").removeClass('active');
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
