$(document).ready(function() {
  $(".jumper").click(function() {
    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);
  });
  
  $(".hover").hover(
    function() {
      $(this).css('background-color', '#333');
  }, function() {
      $(this).css('background-color', '');
  });
});