

var main = function(){
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
	$('#title').click(function(){
		$(this).animate({
			opacity: '.2'},
			1000, function() {
			$(this).animate({opacity: '1'}, 500)
		});
	})
}



$(document).ready(main)