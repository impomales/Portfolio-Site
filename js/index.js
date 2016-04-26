$(document).ready(function() {
  $(".jumper").click(function() {
    $("body, html").animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 600);
  });
  
  $(".hover").hover(
    function() {
      $(this).css('background-color', '#aaa');
  }, function() {
      $(this).css('background-color', '');
  });
});