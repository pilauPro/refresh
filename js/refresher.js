var main = function(){
	$('#draw').click(function(){
		// alert($('input:radio[name=format]:checked').val())
		var rows = $('input:text[name=rows]').val();
		var elements = $('input:text[name=elements]').val();

		var width = 1400 / elements
		var height = 800 / rows

		for (var i = 0; i < rows; i++){
			$('.menu').after('<div class=\'row\'></div>')
		}

		for (var i = 0; i < elements; i++){
			$('.row').append('<div class=\'square\'></div>')
		}

		$('.square').css({
			width: width,
			height: height
		});
		$('.square').mouseenter(function(){
			$(this).css('background-color', 'green')
		});
	});
}

$(document).ready(main)
