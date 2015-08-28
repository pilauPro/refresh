var main = function(){

	var rows = prompt("how many rows?")
	var squares = prompt("how many squares per row?")
	var width = 1200 / squares
	var height = 600 / rows

	for (var i = 0; i < rows; i++){
		$('.menu').after('<div class=\'row\'></div>')
	}

	for (var i = 0; i < squares; i++){
		$('.row').append('<div class=\'square\'></div>')
	}
	$('.square').css({
		width: width,
		height: height
	});

	$('.square').mouseenter(function(){
		$(this).css('background-color', 'green');
	});

	$('#draw').click(function(){
		alert("hi");
	});

}

$(document).ready(main)
