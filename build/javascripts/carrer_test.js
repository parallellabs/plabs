$(document).ready(function(){var a={},o=[],e={},o=[];$(".apply-form").on("submit",function(r){console.log("clicked submit"),r.preventDefault();var s=$("#name"),t=$("#email"),c=$("#linkedIn"),l=$("#additionalInfo"),p=$("#attachment"),n=$("#behance");s.val()?($(".apply-form .group .msg1").animate({opacity:"+0"}),$("#name").css("border-color","#757575"),$(".apply-form .group .crossOne").css("display","none")):($(".apply-form .group .msg1").animate({opacity:"+1"}),$("#name").css("border-color","#db4344"),$(".apply-form .group .crossOne").css("display","inline"));var i=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,m=i.test(t.val());return m?($(".group .msg2").animate({opacity:"+0"}),$("#email").css("border-color","#757575"),$(".group .crossTwo").css("display","none")):($(".group .msg2").animate({opacity:"+1"}),$(".group .crossTwo").css("display","inline"),$("#email").css("border-color","#db4344")),c.val()?($(".apply-form .group .msg3").animate({opacity:"+0"}),$("#linkedIn").css("border-color","#757575"),$(".apply-form .group .crossThree").css("display","none")):($(".apply-form .group .msg3").animate({opacity:"+1"}),$("#linkedIn").css("border-color","#db4344"),$(".apply-form .group .crossThree").css("display","inline")),p.val()?($(".apply-form .group .attach-msg1").animate({opacity:"+0"}),$(".apply-form .group .attach-msg").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),$(".apply-form .group .crossOne").css("display","none"),$("#attachment").on("change",function(a){document.querySelector("#attachment");$.each(a.target.files,function(a,e){if(!(e.size<1048576))return alert("Too large Image. Only image smaller than 1MB can be uploaded."),$(".apply-form .group .attach-msg").animate({opacity:"+1"}),$(".apply-form .group .attach-msg1").animate({opacity:"+0"}),$("#behance").css("border-color","#db4344"),$(".filename").html("No files selected"),!1;var r=new FileReader;r.onload=function(a){object={},object.path=a.target.result,console.log(object),o.push(object)},$(".apply-form .group .attach-msg1").animate({opacity:"+0"}),$(".apply-form .group .attach-msg").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),$(".apply-form .group .crossOne").css("display","none"),r.readAsDataURL(e)});var e=[".docx",".doc",".pdf"],r=$("#attacment").val();if(console.log(r),r){var s=r.split(".");return s=s.reverse(),$.inArray(s[0].toLowerCase(),e)>-1?($(".filename").html($("#attacment").value.split("\\").pop()),$(".apply-form .group .attach-msg").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),!0):($(".apply-form .group .attach-msg").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344"),$(".apply-form .group .attach-msg1").animate({opacity:"+0"}),$(".apply-form .group .cross-icon").show(),!1)}}),n.val()?($(".apply-form .group .msg4").animate({opacity:"+0"}),$("#behance").css("border-color","#757575"),$(".apply-form .group .crossFour").css("display","none")):($(".apply-form .group .msg4").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344"),$(".apply-form .group .crossFour").css("display","inline")),void(s.val()&&m&&c.val()?(a={name:s.val(),email:t.val(),linkedIn:c.val(),additionalInfo:l.val(),attachments:o,jobForm:!0},$.ajax({method:"POST",url:"http://205.186.143.136:5000/sendmail",data:a}).done(function(a){alert("Message sent succesfully: "+a)})):s.val()&&m&&n.val()&&(e={name:s.val(),email:t.val(),behance:n.val(),additionalInfo:l.val(),attachments:o,jobForm1:!0},$.ajax({method:"POST",url:"http://205.186.143.136:5000/sendmail",data:e}).done(function(a){alert("Message sent succesfully: "+a)})))):($(".apply-form .group .attach-msg1").animate({opacity:"+1"}),$("#behance").css("border-color","#db4344"),$(".apply-form .group .crossOne").css("display","inline"),!1)})});