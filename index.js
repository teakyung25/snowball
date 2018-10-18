$(document).ready(function() {
  var scrollANIMATE = $('a');

  scrollANIMATE.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });


  /*  $('a').click()(function(){
 		$(this).addClass('.selected');
 	});
	*/

   $(window).scroll(function(){
  	var scrollPosition = $(this).scrollTop();

	scrollANIMATE.each(function(){
  		var slidePosition = $(this.hash).offset().top;

  		if(scrollPosition <= slidePosition){
  			$(".scrollingNAV.selected").removeClass("selected");
  			$(this).addClass('selected');
  		}

  		});

  	});
});


