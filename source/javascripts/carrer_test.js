$(document).ready(function(){
	var jobFormData = {}, files = [], filesValidated = 0;
	var jobFormData1 = {}, files = [], filesValidated = 0;
	$('.apply-form').on('submit', function(e) {
		console.log('clicked submit');
		e.preventDefault();

		// Write selectors here
		var field1 = $('#name');
		var field2 = $('#email');
		var field3 = $('#linkedIn');
		var field4 = $('#additionalInfo');
		var field5 = $('#attachment');
		var field6 = $('#behance');

		if(!field1.val()){
			$('.apply-form .group .msg1').animate({"opacity": "+1"});
			$('#name').css('border-color', '#db4344');
			$('.apply-form .group .crossOne').css('display', 'inline');
		}else{
			$('.apply-form .group .msg1').animate({"opacity": "+0"});
			$('#name').css('border-color', '#757575');
			$('.apply-form .group .crossOne').css('display', 'none');
		}

		var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;  
			var mail = emailReg.test(field2.val());

		if(mail) {  
		    $('.group .msg2').animate({"opacity": "+0"});
		    $('#email').css('border-color', '#757575');
		    $('.group .crossTwo').css('display', 'none');
		}else{
		  $('.group .msg2').animate({"opacity":"+1"});
		    $('.group .crossTwo').css('display', 'inline');
		    $('#email').css('border-color', '#db4344');
		} 

		if(!field3.val()){
			$('.apply-form .group .msg3').animate({"opacity": "+1"});
			$('#linkedIn').css('border-color', '#db4344');
			$('.apply-form .group .crossThree').css('display', 'inline');
		}else{
			$('.apply-form .group .msg3').animate({"opacity": "+0"});
			$('#linkedIn').css('border-color', '#757575');
			$('.apply-form .group .crossThree').css('display', 'none');
		}

		if(!field5.val()){
			$('.apply-form .group .attach-msg1').animate({"opacity": "+1"});
			$('#behance').css('border-color', '#db4344');
			$('.apply-form .group .crossOne').css('display', 'inline');
			return false;
		}else{
			$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
			$('.apply-form .group .attach-msg').animate({"opacity": "+0"});
			$('#behance').css('border-color', '#757575');
			$('.apply-form .group .crossOne').css('display', 'none');
		}

			

		$('#attachment').on('change', function(event) {
			var attachFile = document.querySelector('#attachment');
		    // if(checkfile(attachFile)){
			 	$.each(event.target.files, function(index, file) {
			 		if(file.size < 1*1024*1024){
				        var reader = new FileReader();
				        reader.onload = function(event) {  
				          object = {};

				          object.path = event.target.result;
				          console.log(object);
				          files.push(object);
				        };  
				        $('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
						$('.apply-form .group .attach-msg').animate({"opacity": "+0"});
						$('#behance').css('border-color', '#757575');
						$('.apply-form .group .crossOne').css('display', 'none');
				        reader.readAsDataURL(file);
			   		}else{
			   			alert("Too large Image. Only image smaller than 1MB can be uploaded.");
				        $('.apply-form .group .attach-msg').animate({"opacity": "+1"});
						$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
						$('#behance').css('border-color', '#db4344');
				        $('.filename').html('No files selected');
				        return false;
			   		}
			    });
			// }
				var validExts = [".docx", ".doc", ".pdf"];
				var fileExt = $('#attacment').val();
				console.log(fileExt);
				// fileExt = fileExt.substr(fileExt.lastIndexOf('.') );
				if ( fileExt ) {
					var get_ext = fileExt.split('.');
				        // reverse name to check extension
				        get_ext = get_ext.reverse();
					if ($.inArray ( get_ext[0].toLowerCase(), validExts ) > -1 ){

						$('.filename').html($('#attacment').value.split( '\\' ).pop());
						$('.apply-form .group .attach-msg').animate({"opacity": "+0"});
						$('#behance').css('border-color', '#757575');
						// $('.apply-form .group .cross-icon').hide();
						return true;
					}else {
						$('.apply-form .group .attach-msg').animate({"opacity": "+1"});
						$('#behance').css('border-color', '#db4344');
						$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
						$('.apply-form .group .cross-icon').show();
						return false;
					}
				}
				

	    });

		// function checkfile(sender) {
		// 	var validExts = new Array(".docx", ".doc", ".pdf");
		// 	var fileExt = sender.value;
		// 	fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
			
		// 	if (validExts.indexOf(fileExt) < 0){
		// 		$('.apply-form .group .attach-msg').animate({"opacity": "+1"});
		// 		$('#behance').css('border-color', '#db4344');
		// 		$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
		// 		$('.apply-form .group .cross-icon').show();
		// 		return false;
		// 	}else {
		// 		$('.filename').html(sender.value.split( '\\' ).pop());
		// 		$('.apply-form .group .attach-msg').animate({"opacity": "+0"});
		// 		$('#behance').css('border-color', '#757575');
		// 		// $('.apply-form .group .cross-icon').hide();
		// 		return true;
		// 	}
		// }

		if(!field6.val()){
			$('.apply-form .group .msg4').animate({"opacity": "+1"});
			$('#behance').css('border-color', '#db4344');
			$('.apply-form .group .crossFour').css('display', 'inline');
		}else{
			$('.apply-form .group .msg4').animate({"opacity": "+0"});
			$('#behance').css('border-color', '#757575');
			$('.apply-form .group .crossFour').css('display', 'none');
		}


		if (field1.val() && mail && field3.val()) {
			jobFormData = { name: field1.val(), email: field2.val(), linkedIn: field3.val(), additionalInfo: field4.val(), attachments: files, jobForm: true };
			// jquery ajax call here
			$.ajax({
			  method: "POST",
			  url: "http://205.186.143.136:5000/sendmail",
			  data: jobFormData
			})
			  .done(function( msg ) {
			    alert( "Message sent succesfully: " + msg );
			  });
		}else if (field1.val() && mail && field6.val()) {
			jobFormData1 = { name: field1.val(), email: field2.val(), behance: field6.val(), additionalInfo: field4.val(), attachments: files, jobForm1: true };
			// jquery ajax call here
			$.ajax({
			  method: "POST",
			  url: "http://205.186.143.136:5000/sendmail",
			  data: jobFormData1
			})
			  .done(function( msg ) {
			    alert( "Message sent succesfully: " + msg );
			  });
		}

		

	});
	
});

