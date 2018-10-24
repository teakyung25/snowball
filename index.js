$(function() {
  var scrollANIMATE = $('.page')

  scrollANIMATE.click(function(e) {
    e.preventDefault();
    $('html,body,div,ul,a').animate({
      scrollTop: $(this.hash).offset().top 
    }, 500 );
  });

  $(".gone").mouseover(function() {
    $(".pageContainer").animate({left:"0px"},100);
    $(".page").animate({left:"0px"},100);
  });
  $(".gone").mouseleave(function() {
    $(".pageContainer").animate({left:"-90px"},100);
  });


   $('html,body,div,ul,a').scroll(function(){
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

