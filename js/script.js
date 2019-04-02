$(document).ready(function() {
    Tipped.create('.report-tooltip--calendar', 'День 1');
    Tipped.create('.report-tooltip--clock', '13:30');
    Tipped.create('.report-tooltip--arrow', 'Зал 1');
    Tipped.create('.report-tooltip--lang', 'EN');
  });

  // burger menu
  $('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });
  