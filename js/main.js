
/*When the page loads*/
$(function() {

	/*Case Study Navigation Appears*/

	$(window).scroll( function(){
	 
	    if ($(window).scrollTop() >= $('.quotebox').position().top) {
	        $('.cs-nav').fadeIn();
	    } else {
	        $('.cs-nav').fadeOut();
	    }
	});

	/*When the mouse hovers over Case Study, menu slides open*/
	$('.cs-nav li').hover(
		function () {
	    	$('ul', this).stop().slideDown(100);
		},
	  function () {
	   		$('ul', this).stop().slideUp(100);
	  }
	);
	
	/* The first papers set up and function */
	var $folded1 = $('.paper-1').oriDomi({
		vPanels:         5,   // number of panels when folding left or right (vertically oriented)
		speed:           50,  // folding duration in ms
	});

	/* The dragging mouse function for reveal */
	$('.paper1').on('click', function() {
		$folded1.oriDomi('reveal', 20);
	});

	/* Create two more papers set up and function */

	setTimeout(function(){

		$folded1.oriDomi('stairs', 70);
		$folded2.oriDomi('stairs', 20);
		$folded3.oriDomi('stairs', 20);

	}, 500);

});
