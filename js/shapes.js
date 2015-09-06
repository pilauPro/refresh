var main = function(){
	// alert($('#sq2').css('display'))
	$('.square').mouseenter(function() {
		if (! $(this).hasClass('downSquare')){
			$(this).addClass('downSquare');
		}
		else{
			$(this).removeClass('downSquare');
		}
	})
}


$(document).ready(main)