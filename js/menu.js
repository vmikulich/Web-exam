$(document).ready(function() {
  $('.mob_nav').click(function() {
    $('nav .topnav').slideToggle(200);
  });
  

  $(window).resize(function() {		
		if (  $(window).width() > 946 ) {			
			$('nav .topnav').removeAttr('style');
		 }
	});
});

