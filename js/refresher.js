var drawGrid = function(rows, elements){

		var width = 1300 / elements
		var height = 800 / rows
		
		$('.row').remove()

		for (var i = 0; i < rows; i++){
			$('.menu').after('<div class=\'row\'></div>')
		}

		for (var i = 0; i < elements; i++){
			$('.row').append('<div class=\'square\'></div>')
		}

		$('.square').css({
			width: width,
			height: height
		})
}

var gridShape = function(shape){
	if (shape == 'squares'){
		$('.square').css('border-radius', '5%')
	}
	else if (shape == 'circles'){
		$('.square').css('border-radius', '100%')
	}

}

var colorGrid = function(){
	$('.square').mouseenter(function(){
		$(this).css('background-color', 'green')
	})
}

var main = function(){

	drawGrid(10,40)
	colorGrid()

	$('#dropdownMenu1').click(function(){
		$('.dropdown-menu').toggle()
	})

	$('input:text').focus(function(){
		$(this).val('')
	})

	$('#draw').click(function(){

		var shape = $('input:radio[name=shape]:checked').val()
		var rows = $('input:text[name=rows]').val()
		var elements = $('input:text[name=elements]').val()

		drawGrid(rows, elements)
		gridShape(shape)
		colorGrid()

	})
}

$(document).ready(main)
