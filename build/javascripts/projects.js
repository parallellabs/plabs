$(window).scroll(function(){var e=$(".section").offset().top;$(window).scrollTop()>=e?$("#wrapper").addClass("available"):$("#wrapper").removeClass("available"),$(window).scrollTop()>=$(".blur-container").offset().top-10&&($(".blurred-img").css("opacity","+=1"),$(".blur-container .content .conversetion").addClass("start"),$(".blur-container .content .design-goals").show("slow"),$(".conversetion.start").each(function(e){var t=$(this);setTimeout(function(){t.find(".user").addClass("animate"),t.find(".message").css("opacity","+=1")},300*e)}))}),$(document).ready(function(){$("#changeMe").on("mousedown",function(e){var t=$(this).parent(),o=t.width(),i=e.pageX;$(document).on("mouseup",function(e){$(document).off("mouseup").off("mousemove")}),$(document).on("mousemove",function(e){var n=e.pageX-i;t.css({right:n/2,width:o+n})})});var e=$("#projectBrief");if(e.keyup(function(){var t=e.val().length;$("#counter");$("#counter").html(""),$("#counter").html(t)}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var t=$(".height-fix").height();$(".height-fix").height(t)}$(".open-form").on("click",function(){$(".main-form").addClass("openForm-model"),$(this).parents("html").addClass("overflow-H"),$(this).parents("body").addClass("overflow-H")}),$(".close-form").on("click",function(){$(".main-form").removeClass("openForm-model"),$(this).parents("html").removeClass("overflow-H"),$(this).parents("body").removeClass("overflow-H")}),$(".button-floating").click(function(){var e=$("#wrapper");e.hasClass("button-floating-clicked")||(e.attr("class","center available"),e.toggleClass("button-floating-clicked-out")),e.toggleClass("button-floating-clicked ")}),$(".btn-overlay").on("click",function(){$("#wrapper").removeClass("button-floating-clicked")}),$("#sky-carousel").carousel({itemWidth:600,itemHeight:400,distance:5,enableMouseWheel:!1,navigationButtonsVisible:!1,selectedItemDistance:50,selectedItemZoomFactor:1,unselectedItemZoomFactor:.67,unselectedItemAlpha:.6,motionStartDistance:170,topMargin:10,gradientStartPoint:.35,gradientOverlayColor:"#f5f5f5",gradientOverlaySize:190,gradientOverlayVisible:!1,reflectionDistance:1,reflectionAlpha:.35,reflectionVisible:!1,reflectionSize:70,selectByClick:!0}),$("#sky-carousel-2").carousel({itemWidth:300,itemHeight:280,distance:30,slideSpeed:.75,loop:!0,enableMouseWheel:!1,navigationButtonsVisible:!0,selectedItemDistance:50,selectedItemZoomFactor:1,unselectedItemZoomFactor:.67,unselectedItemAlpha:.6,motionStartDistance:170,topMargin:0,gradientStartPoint:.35,gradientOverlayColor:"#ffffff",gradientOverlaySize:110,reflectionDistance:1,reflectionAlpha:.35,reflectionVisible:!1,reflectionSize:70,selectByClick:!0}),$("#budget").ionRangeSlider({min:3e3,max:2e4,from:6e3,step:3e3,grid:!1,keyboard:!0,grid_snap:!1,force_edges:!0,prefix:"$",min_prefix:!1,max_postfix:!1,decorate_both:!1,prettify_enabled:!0,prettify_separator:","})});