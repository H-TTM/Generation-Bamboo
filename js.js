


// This makes the header transparent initially, then re-appears when scrolled 400px
// This was grabbed from here - https://codepen.io/sonorangirl/pen/XmRBjq


$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 200) { 
              $('.navbar').addClass('background-green');
          } else {
              $('.navbar').removeClass('background-green');
          }
        });
});





$(function() {
  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});