$(document).ready(function() {
// Variables for Work scrolling functionaltiy

	var itemWidth = $('.workItem').width();		//width of work div
	var index = 0;		//current position of circle indicators

// Variables for Dashboard functionality

	var scrollDist; 	//offset of div to traverse to
	var marginOffset; 	//offset of margin inbetween div's
	var dashHeight; 	// height of dashboard for smaller version of website
	var totOffset;		//sum of everything needed to traverse to div

	$('#aboutLink').click(function( e ){
		e.preventDefault();

		scrollDist = $("#about").offset().top;
		marginOffset = 0.2 * parseFloat($('#about').css("margin-top"));
		dashHeight = $('#dashboard').height();

		totOffset = scrollDist - marginOffset;
		if ($('#dashboard').css('z-index') == 100){
			totOffset = totOffset - (dashHeight + 20);
		}

		$("html, body").animate( { scrollTop: totOffset}, 800);
	
	});


	$('#workLink').click(function( e ){
		e.preventDefault();

		scrollDist = $("#work").offset().top;
		marginOffset = 0.2 * parseFloat($('#about').css("margin-top"));
		dashHeight = $('#dashboard').height();

		totOffset = scrollDist - marginOffset;
		if ($('#dashboard').css('z-index') == 100){
			totOffset = totOffset - (dashHeight + 20);
		}

		$("html, body").animate( { scrollTop: totOffset}, 800);
	});


	$('#contactLink').click(function(e ){
		e.preventDefault();

		scrollDist = $("#contact").offset().top;
		marginOffset = 0.2 * parseFloat($('#about').css("margin-top"));
		dashHeight = $('#dashboard').height();

		totOffset = scrollDist - marginOffset;
		if ($('#dashboard').css('z-index') == 100){
			totOffset = totOffset - (dashHeight + 20);
		}

		$("html, body").animate( { scrollTop: totOffset}, 800);

	});


	$('#right').click(function(){

		itemWidth = $('.workItem').width();
		
		if (index == 2){
			index = 0;
		} else {
			index++;
		}
		$('#work').animate( { scrollLeft: (index * itemWidth)}, 800);
		circles(index);
	});

	$('#left').click(function() {

		itemWidth = $('.workItem').width();

		if (index == 0){
			index = 2;
		} else {
			index--;
		}
		$('#work').animate( { scrollLeft: (index * itemWidth)}, 800);
		circles(index);
	});

	function circles( index ) {
		$('.shaded').removeClass('shaded').addClass('unshaded');
		$('.unshaded').each(function( i, element) {
			if (i == index){
			$(element).removeClass('unshaded').addClass('shaded');
			return false;
			}
		});
	}
	
});
