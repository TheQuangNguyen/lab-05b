'use strict';

function checkScreenSize() {
  if ($(window).width() > 768) { 
    $('header').addClass('color1');
    $('nav').addClass('color2');
    $('section > div:first-child').addClass('color3');
    $('section > div:last-child').addClass('color4');
    $('figure > div:first-child').addClass('color5');
    $('figure > div:nth-child(2)').addClass('color6');
    $('figure > div:nth-child(3)').addClass('color7');
    $('figure > div:last-child').addClass('color8');
    $('footer').addClass('color9');
  } else {
    $('header').removeClass('color1');
    $('nav').removeClass('color2');
    $('section > div:first-child').removeClass('color3');
    $('section > div:last-child').removeClass('color4');
    $('figure > div:first-child').removeClass('color5');
    $('figure > div:nth-child(2)').removeClass('color6');
    $('figure > div:nth-child(3)').removeClass('color7');
    $('figure > div:last-child').removeClass('color8');
    $('footer').removeClass('color9');
  }
}

$(window).ready(checkScreenSize);
$(window).resize(checkScreenSize);