$.browser = {};
$.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit    /.test(navigator.userAgent.toLowerCase());
$.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
$.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());


$(document).ready(function(){
  $('#slides').superslides({
    play: 10000,
    slide_speed: 'slow',
    slide_easing: 'easein'
  });
});