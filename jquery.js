'use strict';

function checkScreenSize() {
  if ($(window).width() > 750 && $(window).width() < 1050) { 
    $('#a').css("background", "papayawhip");
    $('#b').css("background", "aquamarine");
    $('#c').css("background", "beige");
    $('#d').css("background", "chartreuse");
    $('#e').css("background", "darkcyan");
    $('#f').css("background", "fuchsia");
    $('#g').css("background", "gold");
    $('#h').css("background", "honeydew");
    $('#b').css("background", "mediumpurple");
  } else if ($(window).width() >= 1050) { 
    $('#a').css("background", "wheat");
    $('#b').css("background", "olive");
    $('#c').css("background", "orchid");
    $('#d').css("background", "palegreen");
    $('#e').css("background", "peru");
    $('#f').css("background", "rebeccapurple");
    $('#g').css("background", "silver");
    $('#h').css("background", "teal");
    $('#b').css("background", "yellow");
  } else if ($(window).width() <= 750) { 
    $('#a').css("background", "red");
    $('#b').css("background", "blue");
    $('#c').css("background", "brown");
    $('#d').css("background", "green");
    $('#e').css("background", "lightgreen");
    $('#f').css("background", "purple");
    $('#g').css("background", "violet");
    $('#h').css("background", "pink");
    $('#b').css("background", "lightsalmon");
  }
}

$(window).ready(checkScreenSize);
$(window).resize(checkScreenSize);