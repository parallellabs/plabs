$(document).ready(function(){function a(a){var o=new Array(".docx",".doc",".pdf"),s=a.value;s=s.substring(s.lastIndexOf("."));var l=a.files[0];return console.log(l.size),o.indexOf(s)<0&&l.size>1048576?(alert("Invalid file selected, valid files are of "+o.toString()+" types."),!1):void $("#attachment").on("change",function(o){$.each(o.target.files,function(a,o){console.log(o);var s=new FileReader;s.onload=function(a){object={},object.path=a.target.result,console.log(object),e.push(object)},s.readAsDataURL(o)}),$(".filename").html(a.value.split("\\").pop())})}var o={},e=[],s={},e=[];$(".apply-form").on("submit",function(l){console.log("clicked submit"),l.preventDefault();var r=$("#name"),n=$("#email"),t=$("#linkedIn"),c=$("#additionalInfo"),i=$("#attachment"),p=$("#behance");r.val()?($(".apply-form .group .msg1").animate({opacity:"+0"}),$("#name").css("border-color","#757575"),$(".apply-form .group .crossOne").css("display","none")):($(".apply-form .group .msg1").animate({opacity:"+1"}),$("#name").css("border-color","#db4344"),$(".apply-form .group .crossOne").css("display","inline"));var m=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,d=m.test(n.val());d?($(".group .msg2").animate({opacity:"+0"}),$("#email").css("border-color","#757575"),$(".group .crossTwo").css("display","none")):($(".group .msg2").animate({opacity:"+1"}),$(".group .crossTwo").css("display","inline"),$("#email").css("border-color","#db4344")),t.val()?($(".apply-form .group .msg3").animate({opacity:"+0"}),$("#linkedIn").css("border-color","#757575"),$(".apply-form .group .crossThree").css("display","none")):($(".apply-form .group .msg3").animate({opacity:"+1"}),$("#linkedIn").css("border-color","#db4344"),$(".apply-form .group .crossThree").css("display","inline")),i.val()?($(".apply-form .group .attach-msg1").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),$(".apply-form .group .crossOne").css("display","none"),a(document.querySelector("#attachment"))):($(".apply-form .group .attach-msg1").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344"),$(".apply-form .group .crossOne").css("display","inline")),p.val()?($(".apply-form .group .msg4").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),$(".apply-form .group .crossFour").css("display","none")):($(".apply-form .group .msg4").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344"),$(".apply-form .group .crossFour").css("display","inline")),r.val()&&d&&t.val()?($("#apply_Form").find("#submit").html("Sent").attr("disabled","disabled"),o={name:r.val(),email:n.val(),linkedIn:t.val(),additionalInfo:c.val(),attachments:e,jobForm:!0},$.ajax({method:"POST",url:"http://localhost:5100/sendmail",data:o}).done(function(a){$("#apply_Form").find("#submit").after("<span>Succesfully Sent</span>"),alert("Message sent succesfully: "+a)})):r.val()&&d&&p.val()&&($("#apply_Form").find("#submit").html("Sent").attr("disabled","disabled"),s={name:r.val(),email:n.val(),behance:p.val(),additionalInfo:c.val(),attachments:e,jobForm1:!0},$.ajax({method:"POST",url:"http://localhost:5100/sendmail",data:s}).done(function(a){alert("Message sent succesfully: "+a)}))})});