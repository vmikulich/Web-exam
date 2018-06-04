$(document).ready(function() {
  $('.mob_filter').click(function() {
    $('.filter').slideToggle(1);
  });
  
  $('.mob_news').click(function() {
    $('.auto-news').slideToggle(1);
  });

  $(window).resize(function() {		
		if (  $(window).width() > 946 ) {			
			$('.auto-news').removeAttr('style');
		 }
	});
});