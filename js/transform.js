$('#animateBtn').click(function(){
	var shape = $('#trans-shape')

	if (shape.hasClass('rotateShape')){
		animate2(shape, 'rotateShape');
	}
	else{
		animate1(shape);
	}
})
$('#globe').click(function(){
	var ball = $(this)
	if (ball.hasClass('rotateGlobe')){
		animate2(ball, 'rotateGlobe');
	}
	else {
		ball.addClass('rotateGlobe');
	}
})

function animate1(shape){
	shape.addClass('colorShape');
	shape.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		shape.addClass('resizeShape');
		shape.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			shape.addClass('rotateShape');
		});
    });
}

function animate2(shape, classer){
	var newone = shape.clone(true);
	shape.before(newone);
	shape.remove();
	newone.addClass(classer);
}