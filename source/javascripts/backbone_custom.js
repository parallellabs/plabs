var Workspace = Backbone.Router.extend({

  routes: {
    "about-project":  "fnOne",
    "personal-details":  "fnTwo",
    "thank-you": "fnThree"
    // "4":  "fnFourth",
    // "5":  "fnFifth",
    // "6":  "fnSixth"

  },

  fnOne: function() {
    enquiries.set('currentPage', 1);
    $('#thirdForm').parent().css({'z-index':'2', 'opacity':'0'}).removeClass('animated fade-in');
    form.setElement('#firstForm');
    //$('#firstForm').parent().css({'z-index':'3', 'opacity':'1'});
    setTimeout(800);
    $('#firstForm').parent().css({'z-index':'3'}).addClass('animated fade-in');
  },

  fnTwo: function() {
      enquiries.set('currentPage', 2);
      $('#firstForm').parent().css({'z-index':'2'}).removeClass('animated fade-in');
      form.setElement('#secondForm');
      setTimeout(800);
      $('#secondForm').parent().css({'z-index':'3'}).addClass('animated fade-in');
  },
  fnThree: function() {
      enquiries.set('currentPage', 3);
      $('#secondForm').parent().css({'z-index':'2'}).removeClass('animated fade-in');
      //$('#secondForm').parent().css({'z-index':'2', 'opacity':'0'});
      form.setElement('#thirdForm');
      $('#thirdForm').parent().css({'z-index':'3'}).addClass('animated fade-in');
  }

});

var Enquiries = Backbone.Model.extend({
  defaults: {
    "currentPage": 1,
    "optionNone": "",
    "subOptionNone": "",
    // "op1": "",
    // "op2": "",
    // "op3": "",
    "objective": "",
    "attachLink": "",
    "clientName": "",
    "company": "",
    "email": "",
    "mobileNumber": ""
  }
});

var enquiries = new Enquiries();
var validationFlag = false;
window.enquiries = enquiries;

var FormView = Backbone.View.extend({
  el: $(".inner-box"),

  events: {
    "click .back" :  "prevPage",
    "click .next" :  "nextPage",
    "click .send" :  "sendPage",
    "click .checkgroup": "clicked",
    "change input#files" :  "fileUpload",
    "keyup .textField": "enterHandler"
  },

  model : enquiries,

  // initialize: function() {
  // },
  enterHandler: function(event) {
    if (event.keyCode == 13) {
      this.nextPage();
    }
  },

  clicked: function (e) {
       var $target = $(e.target)
       if (!$target.is(':checkbox')) $target = $target.find('input:checkbox');
       var selected = $target.is(':checked');
      //  console.log('selected: ', selected, 'value: ', $target.val());
       var check = $target.val();
       return check;
   },

  // prevPage: function() {
  //   var currentPage = this.model.get('currentPage');
  //   console.log(currentPage - 1);
  //   workspace.navigate('' + (currentPage - 1), {trigger : true});
  //   $('.group .message').animate({"opacity": "+0"});
  // },

  nextPage: function(event) {

    // Getting all checkbox catagory in a array
    event.preventDefault();
    var inputText = [ ];
    $('#projectType input:checkbox:checked').map(function(){
      inputText.push($(this).next('label').find('.name').text());
    });
    $('#optionNone').val(inputText);

    // Getting all Sub checkbox catagory in a array
    var subInputText = [ ];
    $('#SubOption input:checkbox:checked').map(function(){
      subInputText.push($(this).next('label').find('.box2 .small-name').text());
    });
    $('#subOptionNone').val(subInputText);
    // end

    console.log('test');
    this.modelUpdate();

    var currentPage = this.model.get('currentPage');

    if (this.shouldProceed()) {
      currentPage = currentPage + 1;
      // workspace.navigate('' + (currentPage), {trigger : true});

      console.log(currentPage);


      if(currentPage == 2)
      {
        workspace.navigate('personal-details',{trigger:true});
        // workspace.navigate('',{trigger:true, replace:true});
      }
      if(currentPage == 3)
      {
        workspace.navigate('thank-you',{trigger:true, replace: true});
        // workspace.navigate('',{trigger:true, replace:true});
      }
    }
  },

  // Form validation
  shouldProceed: function() {
    var  validateModel = {
      1: function() {

        if(!!enquiries.get('objective')){
          // $('.group .message').animate({"opacity": "+0"});
          // $('#objective').css('border', '1px solid #757575');
          // return !!enquiries.get('objective');
        }else{
          // $('.group .message').animate({"opacity": "+1"});
          // $('#objective').css('border', '1px solid #db4344');
        }

        if(!!enquiries.get('optionNone')){
          $('#firstForm .message').animate({"opacity": "+0"});
          $('#optionNone').css('border', '1px solid #757575');
          return !!enquiries.get('optionNone');
        }else{
          $('#firstForm .message').animate({"opacity": "+1"});
          $('#optionNone').css('border', '1px solid #db4344');
        }

        // if(!!enquiries.get('op1') || !!enquiries.get('op2') || !!enquiries.get('op3')){
        //   $('.group .message').animate({"opacity": "+0"});
        //   $('#op1 + label').css('border', '1px solid #757575');
        //   return !!enquiries.get('op1');
        // }else{
        //   $('.group .message').animate({"opacity": "+1"});
        //   $('#op1 + label').css('border', '1px solid #db4344');
        // }

        if(!!enquiries.get('attachLink')){
          // $('.group .message').animate({"opacity":"+0"});
          // $('#attachLink').css('border', '1px solid #757575');
          // return !!enquiries.get('company');
        }else{
          // $('.group .message').animate({"opacity":"+1"});
          // $('#attachLink').css('border', '1px solid #db4344');
        }

      },
      2: function() {

        if(!!enquiries.get('clientName')){
          console.log(enquiries.get('clientName'));
          $('#secondForm .message').animate({"opacity":"+0"});
          $('#clientName').css('border', '1px solid #757575');
          //return !!enquiries.get('name');
        }else{
          $('#secondForm .message').animate({"opacity":"+1"});
          $('#clientName').css('border', '1px solid #db4344');
        }

        if(!!enquiries.get('company')){
          // console.log(enquiries.get('company'));
          // $('#secondForm .message').animate({"opacity":"+0"});
          // $('#company').css('border', '1px solid #757575');
          // return !!enquiries.get('company');
        }else{
          // $('#secondForm .message').animate({"opacity":"+1"});
          // $('#company').css('border', '1px solid #db4344');
        }

        if(!!enquiries.get('mobileNumber')){
          // $('.group .message').animate({"opacity":"+0"});
          // $('#mobileNumber').css('border', '1px solid #757575');
          // return !!enquiries.get('mobile');
        }else{
          // $('.group .message').animate({"opacity":"+1"});
          // $('#mobileNumber').css('border', '1px solid #db4344');
        }

        var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        // console.log('email value is:'+ enquiries.get('email').value);
        var mail = enquiries.get('email');
        // console.log('email is' + mail.value);


        //mobile validation
        var mobiReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        var mobile = enquiries.get('mobileNumber');
        // console.log(enquiries.get('mobile'));

         // Check for mobile and email validation both should be true
        // if(!!emailReg.test(mail) && !!mobiReg.test(mobile)) {
        //   $('.group .message').animate({"opacity":"+1"});
        //   $('#email').css('border', '1px solid #757575');
        //   $('#mobileNumber').css('border', '1px solid #757575');
        //   return !!enquiries.get('email');
        //   return !!enquiries.get('mobile');
        // }else{
        //   $('.group .message').animate({"opacity":"+1"});
        //   $('#email').css('border', '1px solid #db4344');
        //   $('#mobileNumber').css('border', '1px solid #db4344');
        // }

        // Check for email validation
        if(!!emailReg.test(mail) ){
          // console.log(mail.value);
          $('#secondForm .message').animate({"opacity": "+0"});
          $('#email').css('border', '1px solid #757575');
          validationFlag = true;
          return !!enquiries.get('email');
        }else{
          $('#secondForm .message').animate({"opacity":"+1"});
          $('#email').css('border', '1px solid #db4344');
          // return false;
        }
        // Check for mobile validation
        // if(!!mobiReg.test(mobile)){
        //   $('#mobileNumber').parents('.group').find('.message').animate({"opacity": "+0"});
        //   $('#mobileNumber').css('border', '1px solid #757575');
        //   // return !!enquiries.get('mobile');
        // }else{
        //   $('#mobileNumber').parents('.group').find('.message').animate({"opacity":"+1"});
        //   $('#mobileNumber').css('border', '1px solid #db4344');
        // }

      },
      3: function() {
        return true;
      }
    };

    var flag = validateModel[enquiries.get('currentPage').toString()]();
    console.log('returning ', flag);
    return flag;

  },

  sendPage: function() {
    console.log('returning-flag ', validationFlag);

    if(validationFlag)
    {
      this.modelUpdate();
      console.log(enquiries.attributes);
    $.post( "http://205.186.143.136:5000/sendmail", enquiries.attributes )
      // $.post( "http://localhost:5100/sendmail", enquiries.attributes )
        .done(function( data ) {
          console.log('Response: ', data );
          // alert( "Message sent succesfully:" + data );
        });
    }

  },

  // Updating the model
  modelUpdate: function() {
    console.info('updating...');
    var groups = this.$el.find('.group'), newGroups =[];
    var i = 0;
    while (groups[i]) {
      newGroups[i] = groups[i++];
    }
    console.info('New Groups', newGroups);

    newGroups.forEach(function(group) {
      enquiries.set(
        $(group).find('input').attr('id'),
        $(group).find('input').val()
      );
    });
    // enquiries.set(
    //   this.$el.find('.group input').attr('id'),
    //   this.$el.find('.group input').val()
    // );
    enquiries.set(this.$el.find('.group textarea').attr('id'), this.$el.find('.group textarea').val());
  },

  fileUpload: function(event) {
    console.log(event);
    var files = [];
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
    setTimeout(1000,enquiries.set('attachments', files));
  }

});

$('.open-form').click(function(){
    console.log('clicked open form');
    var currentPage = enquiries.get('currentPage');
    currentPage = currentPage;
    console.log("on form open: " + currentPage);
    if(currentPage == 1){
      workspace.navigate('about-project',{trigger:true});
    }
});


var form = new FormView();

window.workspace = new Workspace();
Backbone.history.start({pushState:false});
workspace.navigate('/');
