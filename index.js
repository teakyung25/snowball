$(function() {
  var scrollANIMATE = $('.page')

  scrollANIMATE.click(function(e) {
    e.preventDefault();
    $('html,body,div,ul,a').animate({
      scrollTop: $(this.hash).offset().top 
    }, 500 );
  });

   $(window).scroll(function(){
    var scrollPosition = $(this).scrollTop();

  scrollANIMATE.each(function(){
      var slidePosition = $(this.hash).offset().top

      if(scrollPosition >= slidePosition){
        $('.page').removeClass('selected');
        $(this).addClass('selected');
      }
      });

    });
});

