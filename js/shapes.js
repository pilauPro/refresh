function growLines(){
	$('#horz').addClass('growLine');
}

var main = function(){
	growLines();

	$('.square-control').mouseenter(function() {
		dex = $(this).index()
		square = $('.square').eq(dex)
		subSquare = $('.sub-square').eq(dex)

		
		var timer = setTimeout(function(){
			subSquare.animate({opacity: '1'}, 1000)
		}, 1250)


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
		
		changeColor($(this), ShowColor);

		$(this).animate({opacity: '.2'}, 1000, 
			function() { $(this).animate({opacity: '1'}, 500,
				function() { $(this).animate({opacity: '.2'}, 1000,
					function() { $(this).animate({opacity: '1'}, 500)})})}
		);

		function changeColor(element, callback){
			var timer = setTimeout(function(){
				var color = 'purple'
				callback(element, color);
			}, 1500)
		}

		function ShowColor(element, color){
			element.css('color', color);
		}
	})
}



$(document).ready(main)