var main = function(){
	// alert($('#sq2').css('display'))
	$('.square-control').mouseenter(function() {
		dex = $(this).index()
		square = $('.square').eq(dex)
		if (! square.hasClass('downSquare')){
			square.addClass('downSquare');
		}
		else{
			square.removeClass('downSquare');
		}
	})
}


$(document).ready(main)