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


$(function(){
  $.scrollUp();
  scrollName: 'scrollUp';
  topDistance: '300';
  topSpeed: 300;
  animation: 'fade';
  animationInSpeed: 200;
  animationOutSpeed: 200;
  activeOverlay: false
});
