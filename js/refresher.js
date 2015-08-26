var main = function(){

	var rows = prompt("how many rows?")
	var squares = prompt("how many squares per row?")

	for (var i = 0; i < rows; i++){
		$('h1').after('<div class=\'row\'></div>')
	}
	for (var i = 0; i < squares; i++){
		$('.row').append('<div class=\'square\'></div>')
	}
}

$(document).ready(main)
