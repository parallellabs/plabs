// On scroll Blur effect
$(window).scroll(function() {
	var target = $(".blur-container").offset().top;
	if ($(window).scrollTop() >= target) {
		$('.blurred-img').css('opacity', '+=.1');
		$('.blur-container .content .conversetion').addClass('start');
		// $('body').addClass('overflow-H').delay(2000).removeClass('overflow-H');
		$('.conversetion.start').each(function(i){
			var that = $(this);
			setTimeout(function () {
				that.find('.user').addClass('animate');
				that.find('.message').css('opacity', '+=1');
				// that.find('.message').addClass('strech-msg');
			}, 300 * i );
		});

	} else{
		$('.blurred-img').css('opacity', '-=.1');
	}

	// if ($(window).scrollTop() >= target2) {
	// 	$('#container-floating').css('display', 'block');
	// }

}); //end

$(document).ready(function(){
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
                $dragable.css({left: mx / 2,width: startWidth - mx,
                //top: my
            });
            });
	}); //end

	// modal script
	$('#modal_trigger').on('click', function(){
		$('.modal').addClass('open');
		if($('.modal').hasClass('open')){
			$('.modal').css({'opacity':'1'});
			$(this).find('.modal__overlay').css({'opacity':'1'});
			$('body').addClass('overflow-H');
		}else{
			$(this).find('.modal__overlay').css({'opacity':'0'});
			$('body').removeClass('overflow-H');
			$('.modal').css({'opacity':'0'});
		}
	});

	$('.modal .close-btn').on('click', function(){
		$('.modal').removeClass('open');
		$('body').removeClass('overflow-H');
		$('.modal').css({'opacity':'0'});
		console.log('clicked');
	});

	// navigation left/right for modal pop image
	
	$('.arrow').on('click', function(evt){
		var targetArrow = evt.target;
		if (targetArrow.id === 'next') {
	        $('.modal.open .modal__wrap:nth-child(1)').animate({"left": '-100%'});
	  		$('.modal.open .modal__wrap:nth-child(2)').animate({"left": '0'});
	    } else if(targetArrow.id === 'previous') {
			$('.modal.open .modal__wrap:nth-child(2)').animate({"left": '+100%'});
		    $('.modal.open .modal__wrap:nth-child(1)').animate({"left": '0'});
		}
	});
		
		
	// slider initialisetion
	$('.sky-carousel').carousel({
		itemWidth: 600,
		itemHeight: 300,
		distance: 5,
		selectedItemDistance: 50,
		selectedItemZoomFactor: 1,
		unselectedItemZoomFactor: 0.67,
		unselectedItemAlpha: 0.6,
		motionStartDistance: 170,
		topMargin: 100,
		gradientStartPoint: 0.35,
		gradientOverlayColor: "#f5f5f5",
		gradientOverlaySize: 190,
		reflectionDistance: 1,
		reflectionAlpha: 0.35,
		reflectionVisible: false,
		reflectionSize: 70,
		selectByClick: true
	});
})