'use strict';

$(function() {


  $('.first').backstretch('../images/as3.jpg');

  $('#fullpage').fullpage({
    easing: 'swing',
    autoScrolling: false,
    anchors: ['home', 'about', 'contact'],
    css3: true,
    paddingTop: '-50px',
    scrollingSpeed: 500,
    menu: '.navbar-nav',
    resize: false
  });

//  $.ajax({
//    url: "//forms.brace.io/screpito@gmail.com",
//    method: "POST",
//    data: {
//      _replyto: "test@gmail.com",
//      _subject: "test",
//      message: "hello!"
//    },
//    dataType: "json"
//  }).done(function(data){
//    console.log(data);
//  });

});
