var Workspace=Backbone.Router.extend({routes:{1:"fnOne",2:"fnTwo",3:"fnThree",4:"fnFourth"},fnOne:function(){enquiries.set("currentPage",1),$(".wrap").css("opacity","1"),$("#firstForm").removeClass("move-left"),form.setElement("#firstForm"),$("#secondForm").addClass("move-right"),$("#thirdForm").addClass("move-right"),$("#fourthForm").addClass("move-right")},fnTwo:function(){enquiries.set("currentPage",2),$("#secondForm").removeClass("move-right"),$("#secondForm").removeClass("move-left"),form.setElement("#secondForm"),$("#firstForm").addClass("move-left"),$("#thirdForm").addClass("move-right"),$("#fourthForm").addClass("move-right")},fnThree:function(){enquiries.set("currentPage",3),$("#thirdForm").removeClass("move-right"),form.setElement("#thirdForm"),$("#secondForm").addClass("move-left")},fnFourth:function(){enquiries.set("currentPage",4),$("#fourthForm").removeClass("move-right"),form.setElement("#fourthForm"),$("#thirdForm").addClass("move-left")}}),Enquiries=Backbone.Model.extend({defaults:{currentPage:1,clientName:"",projectBrief:"",files:[],link:""}}),enquiries=new Enquiries;window.enquiries=enquiries;var FormView=Backbone.View.extend({el:$(".wrap"),events:{"click .back":"prevPage","click .next":"nextPage","click .skip":"skipPage","change input#files":"fileUpload","keyup .textField":"enterHandler"},model:enquiries,enterHandler:function(e){13==e.keyCode&&this.nextPage()},prevPage:function(){var e=this.model.get("currentPage");console.log(e-1),workspace.navigate(""+(e-1),{trigger:!0})},nextPage:function(){this.modelUpdate();var e=this.model.get("currentPage");console.log(e+1),this.shouldProceed()&&workspace.navigate(""+(e+1),{trigger:!0})},shouldProceed:function(){var e={1:function(){return $(".client").text(enquiries.get("clientName")),!!enquiries.get("clientName")},2:function(){return!!enquiries.get("projectBrief")},3:function(){return!(!enquiries.get("files").length&&!enquiries.get("link"))}},t=e[enquiries.get("currentPage").toString()]();return console.log("returning ",t),t},skipPage:function(){this.modelUpdate(),console.log(enquiries.attributes),$.post("http://localhost:8080/sendmail",enquiries.attributes).done(function(e){console.log("Response: ",e),alert("sent: "+e)})},modelUpdate:function(){enquiries.set(this.$el.find(".group input").attr("id"),this.$el.find(".group input").val())},fileUpload:function(e){console.log(e);var t=[];$.each(e.target.files,function(e,r){var n=new FileReader;n.onload=function(e){object={},object.filename=r.name,object.data=e.target.result,console.log(object.data),t.push(object)},n.readAsDataURL(r)}),setTimeout(1e3,enquiries.set(this.$el.find("#files").attr("id"),t))}}),form=new FormView;window.workspace=new Workspace,Backbone.history.start(),workspace.navigate("1",{trigger:!0});