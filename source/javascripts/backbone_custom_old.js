var Workspace = Backbone.Router.extend({

  routes: {
    "1":  "fnOne",
    "2":  "fnTwo",
    "3": "fnThree",
    "4":  "fnFourth",
    "5":  "fnFifth",
    "6":  "fnSixth"

  },

  fnOne: function() {
    enquiries.set('currentPage', 1);
    $('.wrap').css('opacity', '1');
    $('#firstForm').removeClass('move-left');
    $('#secondForm').removeClass('move-left');
    $('#thirdForm').removeClass('move-left');
    $('#fourthForm').removeClass('move-left');
    $('#fifthForm').removeClass('move-left');
    $('#sixthForm').removeClass('move-left');
    form.setElement('#firstForm');
    $('#secondForm').addClass('move-right');
    $('#thirdForm').addClass('move-right');
    $('#fourthForm').addClass('move-right');
    $('#fifthForm').addClass('move-right');
    $('#sixthForm').addClass('move-right');
  },

  fnTwo: function() {
      enquiries.set('currentPage', 2);
      $('#secondForm').removeClass('move-right');
      $('#secondForm').removeClass('move-left');
      form.setElement('#secondForm');
      $('#firstForm').addClass('move-left');
      $('#thirdForm').addClass('move-right');
  },
  fnThree: function() {
      enquiries.set('currentPage', 3);
      $('#thirdForm').removeClass('move-right');
      $('#thirdForm').removeClass('move-left');
      // $('#secondForm').removeClass('move-left');
      form.setElement('#thirdForm');
      $('#secondForm').addClass('move-left');
      $('#fourthForm').addClass('move-right');
  },
  fnFourth: function() {
      enquiries.set('currentPage', 4);
      $('#fourthForm').removeClass('move-right');
      $('#fourthForm').removeClass('move-left');
      form.setElement('#fourthForm');
      $('#thirdForm').addClass('move-left');
      $('#fifthForm').addClass('move-right');
  },
  fnFifth: function() {
      enquiries.set('currentPage', 5);
      $('#fifthForm').removeClass('move-right');
      form.setElement('#fifthForm');
      $('#fourthForm').addClass('move-left');
  },
  fnSixth: function() {
      enquiries.set('currentPage', 6);
      $('#sixthForm').removeClass('move-right');
      form.setElement('#sixthForm');
      $('#fifthForm').addClass('move-left');

        // $('.btn.send').attr('disabled="disabled"');
  }

});

var Enquiries = Backbone.Model.extend({
  defaults: {
    "currentPage": 1,
    "clientName": "",
    "email": "",
    "mobile": "",
    "company": "",
    "projectBrief": "",
    "budget": "",
    "attachments": [],
    "link": "",
  }
});

var enquiries = new Enquiries();
var validationFlag = false;
window.enquiries = enquiries;

var FormView = Backbone.View.extend({
  el: $(".wrap"),

  events: {
    "click .back" :  "prevPage",
    "click .next" :  "nextPage",
    "click .send" :  "sendPage",
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

  prevPage: function() {
    var currentPage = this.model.get('currentPage');
    console.log(currentPage - 1);
    workspace.navigate('' + (currentPage - 1), {trigger : true});
    $('.group .message').animate({"opacity": "+0"});
  },

  nextPage: function() {
    this.modelUpdate();

    var currentPage = this.model.get('currentPage');
    console.log(currentPage + 1);

    if (this.shouldProceed()) {
      workspace.navigate('' + (currentPage + 1), {trigger : true});
    }
  },

  // Form validation
  shouldProceed: function() {
    var  validateModel = {
      1: function() {
        if(!!enquiries.get('clientName')){
          $('.client').text(enquiries.get('clientName'));
          $('.group .message').animate({"opacity": "+0"});
          $('#clientName').css('border-color', '#757575');
          $('.group .cross-icon').hide();
          return !!enquiries.get('clientName');
        }else{
          $('.group .message').animate({"opacity": "+1"});
          $('#clientName').css('border-color', '#db4344');
          $('.group .cross-icon').show();
        }
      },
      2: function() {
        var inputLength =  enquiries.get('projectBrief').length;
        // var inputLength =  enquiries.get('projectBrief');
        console.log(inputLength);
        if(!!enquiries.get('projectBrief')){ // && inputLength > 140 //uncomment this want to validate charecter length
          $('.group .message').animate({"opacity":"+0"});
          $('#projectBrief').css('border-color', '#757575');
          $('.group .cross-icon').hide();
          return !!enquiries.get('projectBrief');
        }else{
          $('.group .message').animate({"opacity":"+1"});
          $('#projectBrief').css('border-color', '#db4344');
          $('.group .cross-icon').show();
        }
        // return true;
      },
      3: function() {
        if(!!enquiries.get('budget')){
          $('.group .message').animate({"opacity":"+0"});
          $('#budget').css('border-color', '#757575');
          $('.group .cross-icon').hide();
          return !!enquiries.get('budget');
        }else{
          $('.group .message').animate({"opacity":"+1"});
          $('#budget').css('border-color', '#db4344');
          $('.group .cross-icon').show();
        }
      },
      4: function() {
        var emailReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        // console.log('email value is:'+ enquiries.get('email').value);
        var mail = enquiries.get('email');
        // console.log('email is' + mail.value);


        // mobile validation
        // var mobiReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        // var mobile = enquiries.get('mobile');
        // console.log(enquiries.get('mobile'));

        // // Check for mobile and email validation both should be true
        // if(!!emailReg.test(mail) && !!mobiReg.test(mobile)) {$('.group .message').animate({"opacity":"+1"});
        //   $('.group .cross-icon').hide();
        //   $('#email').css('border-color', '#757575');
        //   $('#mobile').css('border-color', '#757575');
        //   return !!enquiries.get('email');
        //   return !!enquiries.get('mobile');
        // }else{
        //   $('.group .message').animate({"opacity":"+1"});
        //   $('.group .cross-icon').show();
        //   $('#email').css('border-color', '#db4344');
        //   $('#mobile').css('border-color', '#db4344');
        // }
        // Check for email validation
        if(!!emailReg.test(mail) ){
          // console.log(mail.value);
          $('#email').parents('.group').find('.message').animate({"opacity": "+0"});
          $('#email').css('border-color', '#757575');
          $('#email').parents('.group').find('.cross-icon').hide();
          validationFlag = true;
          return !!enquiries.get('email');
        }else{
          $('#email').parents('.group').find('.message').animate({"opacity":"+1"});
          $('#email').parents('.group').find('.cross-icon').show();
          $('#email').css('border-color', '#db4344');
          // return false;
        }
        // Check for mobile validation
        // if(!!mobiReg.test(mobile)){
        //   $('#mobile').parents('.group').find('.message').animate({"opacity": "+0"});
        //   $('#mobile').css('border-color', '#757575');
        //   $('#mobile').parents('.group').find('.cross-icon').hide();
        //   // return !!enquiries.get('mobile');
        // }else{
        //   $('#mobile').parents('.group').find('.message').animate({"opacity":"+1"});
        //   $('#mobile').parents('.group').find('.cross-icon').show();
        //   $('#mobile').css('border-color', '#db4344');
        // }
      },
      5: function() {
        return true;
      }
    };
    var flag = validateModel[enquiries.get('currentPage').toString()]();
    console.log('returning ', flag);
    return flag;

  },

  sendPage: function() {
    // console.log('returning-flag ', validationFlag);
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


var form = new FormView();

window.workspace = new Workspace();
Backbone.history.start({pushState: false});
workspace.navigate('1', {trigger: true});
