$(document).ready(function(){function a(a){var o=new Array(".docx",".doc",".pdf"),t=a.value;t=t.substring(t.lastIndexOf("."));var r=a.files[0];if(console.log(r.size),o.indexOf(t)<0&&r.size<1048576)return alert("Invalid file selected, valid files are of "+o.toString()+" types."),$(".apply-form .group .attach-msg").animate({opacity:"+1"}),$(".apply-form .group .attach-msg1").animate({opacity:"+0"}),!1;if(r.size<1048576){var l=new FileReader;l.onload=function(a){object={},object.path=a.target.result,console.log(object),e.push(object)},l.readAsDataURL(r),console.log(this),$(".filename").html(a.value.split("\\").pop()),$(".apply-form .group .attach-msg").animate({opacity:"+0"}),$("#behance").css("border-color","#757575")}}var o={},e=[],t={},e=[];$(".apply-form").on("submit",function(r){console.log("clicked submit"),r.preventDefault();var l=$("#name"),s=$("#email"),n=$("#linkedIn"),i=$("#additionalInfo"),c=$("#attachment"),p=$("#behance");l.val()?($(".apply-form .group .msg1").animate({opacity:"+0"}),$("#name").css("border-color","#757575"),$(".apply-form .group .crossOne").css("display","none")):($(".apply-form .group .msg1").animate({opacity:"+1"}),$("#name").css("border-color","#db4344"),$(".apply-form .group .crossOne").css("display","inline"));var m=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,d=m.test(s.val());d?($(".group .msg2").animate({opacity:"+0"}),$("#email").css("border-color","#757575"),$(".group .crossTwo").css("display","none")):($(".group .msg2").animate({opacity:"+1"}),$(".group .crossTwo").css("display","inline"),$("#email").css("border-color","#db4344")),n.val()?($(".apply-form .group .msg3").animate({opacity:"+0"}),$("#linkedIn").css("border-color","#757575"),$(".apply-form .group .crossThree").css("display","none")):($(".apply-form .group .msg3").animate({opacity:"+1"}),$("#linkedIn").css("border-color","#db4344"),$(".apply-form .group .crossThree").css("display","inline")),c.val()?($(".apply-form .group .attach-msg1").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),a(document.querySelector("#attachment"))):($(".apply-form .group .attach-msg1").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344")),p.val()?($(".apply-form .group .msg4").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),$(".apply-form .group .crossFour").css("display","none")):($(".apply-form .group .msg4").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344"),$(".apply-form .group .crossFour").css("display","inline")),l.val()&&d&&n.val()?($("#apply_Form").find("#submit").html("Sent").attr("disabled","disabled"),o={name:l.val(),email:s.val(),linkedIn:n.val(),additionalInfo:i.val(),attachments:e,jobForm:!0},$.ajax({method:"POST",url:"http://205.186.143.136:5000/sendmail",data:o}).done(function(a){$("#apply_Form").find("#submit").after("<span>Succesfully Sent</span>")})):l.val()&&d&&c.val()&&p.val()&&($("#apply_Form").find("#submit").html("Sent").attr("disabled","disabled"),t={name:l.val(),email:s.val(),behance:p.val(),additionalInfo:i.val(),attachments:e,jobForm1:!0},$.ajax({method:"POST",url:"http://205.186.143.136:5000/sendmail",data:t}).done(function(a){$("#apply_Form").find("#submit").after('<span style="color: #28b473;">Awesome!! We have got your application and you will hear from us shortly if you are shortlisted for this role.</span>')}))}),$("#attachment").on("change",function(o){a(document.querySelector("#attachment"))&&$.each(o.target.files,function(a,o){var t=new FileReader;t.onload=function(a){object={},object.path=a.target.result,console.log(object),e.push(object)},t.readAsDataURL(o)})})});