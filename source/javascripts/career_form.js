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

	if (!field5.val()) {
		$('.apply-form .group .attach-msg1').animate({"opacity": "+1"});
		$('#behance').css('border-color', '#db4344');
		// $('.apply-form .group .crossOne').css('display', 'inline');
	}else{
		$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
		$('#behance').css('border-color', '#757575');
		// $('.apply-form .group .crossOne').css('display', 'none');
		checkfile(document.querySelector('#attachment'));
	}

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
		$('#apply_Form').find('#submit').html('Sent').attr('disabled', 'disabled');

		jobFormData = { name: field1.val(), email: field2.val(), linkedIn: field3.val(), additionalInfo: field4.val(), attachments: files, jobForm: true };
		// jquery ajax call here
		$.ajax({
		  method: "POST",
		  // url: "http://localhost:5100/sendmail",
		  url: "http://205.186.143.136:5000/sendmail",
		  data: jobFormData
		})
		  .done(function( msg ) {
		  	$('#apply_Form').find('#submit').after('<span>Succesfully Sent</span>');
		    // alert( "Message sent succesfully: " + msg );
		  });
	}else if (field1.val() && mail && field5.val() && field6.val()) {
		$('#apply_Form').find('#submit').html('Sent').attr('disabled', 'disabled');
		jobFormData1 = { name: field1.val(), email: field2.val(), behance: field6.val(), additionalInfo: field4.val(), attachments: files, jobForm1: true };
		// jquery ajax call here
		$.ajax({
		  method: "POST",
		  // url: "http://localhost:5100/sendmail",
		  url: "http://205.186.143.136:5000/sendmail",
		  data: jobFormData1
		})
		  .done(function( msg ) {
		    // alert( "Message sent succesfully: " + msg );
		    $('#apply_Form').find('#submit').after('<span style="color: #28b473;">Awesome!! We have got your application and you will hear from us shortly if you are shortlisted for this role.</span>');
		  });
	}

	});
	
	$('#attachment').on('change', function(event) {
		// console.log('checking valid file:', );
	    if (checkfile(document.querySelector('#attachment')) ) {
		    $.each(event.target.files, function(index, file) {
		        var reader = new FileReader();
		        reader.onload = function(event) {  
		          object = {};

		          object.path = event.target.result;
		          console.log(object);
		          files.push(object);
		        };  
		        reader.readAsDataURL(file);
		    });
		}
    });

	function checkfile(sender) {
		var validExts = new Array(".docx", ".doc", ".pdf");
		var fileExt = sender.value;
		fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
		var singleFile = sender.files[0];
		console.log(singleFile.size);
		if (validExts.indexOf(fileExt) < 0 && singleFile.size < 1*1024*1024) {
			alert("Invalid file selected, valid files are of " +
	       	validExts.toString() + " types.");
			$('.apply-form .group .attach-msg').animate({"opacity": "+1"});
			// $('#behance').css('border-color', '#db4344');
			$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
			// $('.apply-form .group .cross-icon').show();
			return false;
		}else {
			// $('#attachment').on('change', function(event) {
				// $.each(event.target.files, function(index, file)  {
				// $.each(sender.target.files, function(index, file)  {
					// console.log(file);
					if(singleFile.size < 1*1024*1024){
			        var reader = new FileReader();
			        reader.onload = function(event) {  
			          object = {};

			          object.path = event.target.result;
			          console.log(object);
			          files.push(object);
			        };  
			        reader.readAsDataURL(singleFile);
			    // });
			    console.log(this);
				$('.filename').html(sender.value.split( '\\' ).pop());
				$('.apply-form .group .attach-msg').animate({"opacity": "+0"});
				$('#behance').css('border-color', '#757575');
				// $('.apply-form .group .cross-icon').hide();
			}
				
			// });
		}
	}
});

