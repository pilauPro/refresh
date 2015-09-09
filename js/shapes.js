var main = function(){
	// alert($('#sq2').css('display'))
	$('.square-control').mouseenter(function() {
		dex = $(this).index()
		square = $('.square').eq(dex)


		if (! (square.hasClass('downSquare') || square.hasClass('upSquare'))){
			$(this).addClass('activeControl');
			square.addClass('downSquare');
		}
		else if (square.hasClass('downSquare') && !square.hasClass('upSquare')){
			square.addClass('upSquare');
			$(this).addClass('deactiveControl');
		}
		else{
			square.removeClass('upSquare');
			$(this).removeClass('deactiveControl');
		}
	})
}


$(document).ready(main)