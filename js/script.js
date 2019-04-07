$(document).ready(function() {
    Tipped.create('.report-tooltip--calendar', 'День 1');
    Tipped.create('.report-tooltip--clock', '13:30');
    Tipped.create('.report-tooltip--arrow', 'Зал 1');
    Tipped.create('.report-tooltip--lang', 'EN');
  });

  // burger menu
  var burgerIcon = document.querySelectorAll('.burger-icon')[0];
    
  burgerIcon.addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
  })
