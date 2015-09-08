var main = function(){
	// alert($('#sq2').css('display'))
	$('.square-control').mouseenter(function() {
		dex = $(this).index()
		square = $('.square').eq(dex)

		if (! (square.hasClass('downSquare') || square.hasClass('upSquare'))){
			square.addClass('downSquare');
		}
		else if (square.hasClass('downSquare') && !square.hasClass('upSquare')){
			square.addClass('upSquare');
		}
		else{
			square.removeClass('upSquare');
		}
	})
}


$(document).ready(main)