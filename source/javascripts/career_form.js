$(document).ready(function(){
	var jobFormData = {}, files = [], filesValidated = 0;
	var jobFormData1 = {}, files = [], filesValidated = 0;
	var jobFormData2 = {}, files = [], filesValidated = 0;
	var jobFormData3 = {}, files = [], filesValidated = 0;
	var jobFormData4 = {}, files = [], filesValidated = 0;

	// Write selectors here
		var field1 = $('#name');
		var field2 = $('#email');
		var field3 = $('#linkedIn');
		var field4 = $('#additionalInfo');
		var field5 = $('#attachment');
		var field6 = $('#behance');


		var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;  
		var mail = emailReg.test(field2.val());

	function jobFormValidation(){
		
		if(!field1.val()){
			$('.apply-form .group .msg1').animate({"opacity": "+1"});
			$('#name').css('border-color', '#db4344');
			$('.apply-form .group .crossOne').css('display', 'inline');
			// $('#name').removeClass('not-empty');
		}else{
			$('.apply-form .group .msg1').animate({"opacity": "+0"});
			$('#name').css('border-color', '#757575');
			$('.apply-form .group .crossOne').css('display', 'none');
			// $('#name').addClass('not-empty');
		}

    mail = emailReg.test(field2.val());

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
			// $('#behance').css('border-color', '#db4344');
			// $('.apply-form .group .crossOne').css('display', 'inline');
		}else{
			$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
			// $('#behance').css('border-color', '#757575');
			// $('.apply-form .group .crossOne').css('display', 'none');
		}

		// if(!field6.val()){
		// 	$('.apply-form .group .msg4').animate({"opacity": "+1"});
		// 	$('#behance').css('border-color', '#db4344');
		// 	$('.apply-form .group .crossFour').css('display', 'inline');
		// }else{
		// 	$('.apply-form .group .msg4').animate({"opacity": "+0"});
		// 	$('#behance').css('border-color', '#757575');
		// 	$('.apply-form .group .crossFour').css('display', 'none');
		// }

	}

	$('.apply-form').on('submit', function(e) {
		console.log('clicked submit');
		e.preventDefault();
		jobFormValidation();

		if (field1.val() && mail && field3.val()) { // product manager
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
			    alert( "Message sent succesfully: " + msg );
			  });
		} else if (field1.val() && mail && field5.val() && $('#apply_Form').hasClass('jobForm1')) { // Interface Designer
			$('#apply_Form').find('#submit').html('Sent').attr('disabled', 'disabled');
			jobFormData1 = { name: field1.val(), email: field2.val(), behance: field6.val(), additionalInfo: field4.val(), attachments: files, jobForm1: true };
			// jquery ajax call here
			$.ajax({
			  method: "POST",
			  // url: "http://localhost:5100/sendmail",
			  url: "http://205.186.143.136:5000/sendmail",
			  data: jobFormData1
			})
			  .done(function( msg1 ) {
			    // alert( "Message sent succesfully: " + msg1 );
			    $('#apply_Form').find('#submit').after('<span style="color: #28b473;">Awesome!! We have got your application and you will hear from us shortly if you are shortlisted for this role.</span>');
			  });
		} else if (field1.val() && mail && field5.val() && $('#apply_Form').hasClass('jobForm2')) { // Visual Designer
			$('#apply_Form').find('#submit').html('Sent').attr('disabled', 'disabled');
			jobFormData2 = { name: field1.val(), email: field2.val(), behance: field6.val(), additionalInfo: field4.val(), attachments: files, jobForm2: true };
			// jquery ajax call here
			$.ajax({
			  method: "POST",
			  // url: "http://localhost:5100/sendmail",
			  url: "http://205.186.143.136:5000/sendmail",
			  data: jobFormData2
			})
			  .done(function( msg2 ) {
			    // alert( "Message sent succesfully: " + msg2 );
			    $('#apply_Form').find('#submit').after('<span style="color: #28b473;">Awesome!! We have got your application and you will hear from us shortly if you are shortlisted for this role.</span>');
			  });
		} else if (field1.val() && mail && field5.val() && $('#apply_Form').hasClass('jobForm3')) { // UX Manager
			$('#apply_Form').find('#submit').html('Sent').attr('disabled', 'disabled');
			jobFormData3 = { name: field1.val(), email: field2.val(), behance: field6.val(), additionalInfo: field4.val(), attachments: files, jobForm3: true };
			// jquery ajax call here
			$.ajax({
			  method: "POST",
			  // url: "http://localhost:5100/sendmail",
			  url: "http://205.186.143.136:5000/sendmail",
			  data: jobFormData3
			})
			  .done(function( msg3 ) {
			    // alert( "Message sent succesfully: " + msg );
			    $('#apply_Form').find('#submit').after('<span style="color: #28b473;">Awesome!! We have got your application and you will hear from us shortly if you are shortlisted for this role.</span>');
			  });
		} else if (field1.val() && mail && field5.val() && $('#apply_Form').hasClass('jobForm4')) { // Executive Assistance
			$('#apply_Form').find('#submit').html('Sent').attr('disabled', 'disabled');
			jobFormData4 = { name: field1.val(), email: field2.val(), behance: field6.val(), additionalInfo: field4.val(), attachments: files, jobForm4: true };
			// jquery ajax call here
			$.ajax({
			  method: "POST",
			  // url: "http://localhost:5100/sendmail",
			  url: "http://205.186.143.136:5000/sendmail",
			  data: jobFormData4
			})
			  .done(function( msg4 ) {
			    // alert( "Message sent succesfully: " + msg );
			    $('#apply_Form').find('#submit').after('<span style="color: #28b473;">Awesome!! We have got your application and you will hear from us shortly if you are shortlisted for this role.</span>');
			  });
		}

	});

	$('.apply-form .group input').each(function() {
		$(this).not('.apply-form .group input#attachment').on('change', function(em) {
			em.preventDefault();
			jobFormValidation();
		});
	});

	// check validatation of attachment  
  $('#attachment').on( 'change', function(event) {
   myfile= $( this ).val();
   var ext = myfile.split('.').pop();
   var fileSize = this.files[0];
   console.log("File size is " + fileSize.size);
   if((ext=="pdf" || ext=="docx" || ext=="doc" || ext=="jpg" || ext=="jpeg" || ext=="png") && fileSize.size < 5*1024*1024){
       // alert(ext);
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
			$('.filename').html(myfile.split( '\\' ).pop());

			$('.apply-form .group .attach-msg').animate({"opacity": "+0"});
			$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
   } else{
       // alert(ext);
			$('.apply-form .group .attach-msg1').animate({"opacity": "+0"});
			$('.apply-form .group .attach-msg').animate({"opacity": "+1"});
   }
	});

});

