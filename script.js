$(function() {
  $('header').hide();
  $(window).scroll(function (){
      $('header').each(function(){
          var scroll = $(window).scrollTop();
          if (scroll > 100){
            $(this).fadeIn(500);
          }else{
            $(this).fadeOut(500);
          }
       });
    });
    $('.humber').click(function(){
        $('.modal').fadeIn();
    });
    $('.modal li:first-child').click(function(){
        $('.modal').fadeOut();
    });
});
