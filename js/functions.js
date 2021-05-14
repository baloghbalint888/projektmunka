
$( document ).ready(function() {


	




	setTimeout(function(){
		$('body').addClass('loaded');
	}, 3000);
	

	window.sr = new scrollReveal();

	$('#subscribe').parallax("50%", 0.0);
	

	smoothScroll.init({
		speed: 900, 
		easing: 'easeInOutCubic', 
		updateURL: true, 
		offset: 0, 
		callbackBefore: function ( toggle, anchor ) {}, 
		callbackAfter: function ( toggle, anchor ) {} 
	});
	

	

	$("input, textarea").focus(function() {
		$(this).prev("label").hide();
		$(this).prev().prev("label").hide();	 		 	
	});

	  
});
	   
function elkuld(){
	var komment = document.getElementById=('comment');
	window.open('mailto:test@example.com?subject=rendelésleadás&body='+komment);
}