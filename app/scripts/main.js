'use strict';
/*global swal */

$(function () {

  $('.home').backstretch('../images/bg.jpg');

  $('#fullpage').fullpage({
    easing: 'swing',
    autoScrolling: false,
    anchors: ['home', 'about', 'contact'],
    //paddingTop: '-50px',
    scrollingSpeed: 500,
    menu: '.navbar-nav',
    resize: false
  });

  $('#mail').on('submit', function (event) {
    // Stop normal form behaviour
    event.preventDefault();

    // Convert form data to object
    var form = {};

    $(this)
      .serializeArray()
      .map(function (x) {
        form[x.name] = x.value;
      });

    // Email in hex format just to hide it from bots if you
    // need my email just look into headers or use console.log()
    var email = '\x73\x61\x72\x75\x6E\x61\x73\x2E\x74\x61\x6D\x61\x73\x61\x75\x73\x6B\x61\x73\x40\x67\x6D\x61\x69\x6C\x2E\x63\x6F\x6D';

    $.extend(form, {
      _subject: 'Sarunast.com message from ' + form.name
    });

    $.ajax({
      url: '//forms.brace.io/' + email,
      method: 'POST',
      data: form,
      dataType: 'json'
    }).always(function (data) {
      if (data.success !== 'undefined' && data.success === 'Email sent') {
        swal('Success', 'Email was sent!', 'success');
      } else {
        swal('Oops...',
          'Something went wrong! Not a problem you can still reach my via my email ' + email,
          'error');
      }
    });

  });

});
