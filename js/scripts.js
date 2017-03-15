$(window).scroll(function() {

  var px = $(window).scrollTop();
  var header = $(window).height() /2;

  if (px > header) {
    $('.bar').slideDown();
  }
  else {
    $('.bar').slideUp();
  }

});
