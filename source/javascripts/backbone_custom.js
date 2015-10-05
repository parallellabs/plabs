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
      form.setElement('#fourthForm');   
      $('#thirdForm').addClass('move-left');
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

        // $('.btn.skip').attr('disabled="disabled"');
  }

});

var Enquiries = Backbone.Model.extend({
  defaults: {
    "currentPage": 1,
    "clientName": "",
    "email": "",
    "projectBrief": "",
    "budget": "",
    "attachments": [],
    "link": "",
  }
});

var enquiries = new Enquiries();
window.enquiries = enquiries;

var FormView = Backbone.View.extend({
  el: $(".wrap"),

  events: {
    "click .back" :  "prevPage",
    "click .next" :  "nextPage",
    "click .skip" :  "sendPage",
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
    $('.group .message').hide('slow');
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
        // return !!enquiries.get('clientName');
        if(!!enquiries.get('clientName')){
          $('.client').text(enquiries.get('clientName'));
          $('.group .message').animate({"opacity": "+0"});
          return !!enquiries.get('clientName');
        }else{
          $('.group .message').animate({"opacity": "+1"});
        }
      },
      2: function() {
        if(!!enquiries.get('email')){
          $('.group .message').animate({"opacity": "+0"});
          return !!enquiries.get('email');
        }else{
          $('.group .message').animate({"opacity":"+1"});
        }
      },
      3: function() {
        // return !!enquiries.get('projectBrief');
        if(!!enquiries.get('projectBrief')){
          $('.group .message').animate({"opacity":"+0"});
          return !!enquiries.get('projectBrief');
        }else{
          $('.group .message').animate({"opacity":"+1"});
        }
      },
      4: function() {
        // return !!enquiries.get('projectBrief');
        if(!!enquiries.get('budget')){
          $('.group .message').animate({"opacity":"+0"});
          return !!enquiries.get('budget');
        }else{
          $('.group .message').animate({"opacity":"+1"});
        }
      },
      5: function() {
        return !!(!!enquiries.get('attachments').length || !!enquiries.get('link'));
      }
    };
    var flag = validateModel[enquiries.get('currentPage').toString()]();
    console.log('returning ', flag);
    return flag;

  },

  sendPage: function() {
    this.modelUpdate();
    console.log(enquiries.attributes);

    $.post( "http://localhost:8080/sendmail", enquiries.attributes )
      .done(function( data ) {
        console.log('Response: ', data );
        alert( "Message sent succesfully:" + data );
      });
  },

  modelUpdate: function() {
    enquiries.set(this.$el.find('.group input').attr('id'), this.$el.find('.group input').val());
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
Backbone.history.start();
workspace.navigate('1', {trigger: true});
