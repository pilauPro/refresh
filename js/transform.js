$('#animateBtn').click(function(){
	var shape = $('#trans-shape')

	if (shape.hasClass('rotateShape')){
		animate2(shape);
	}
	else{
		animate1(shape);
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

function animate2(shape){
	shape.addClass('justRotate');
	shape.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		shape.removeClass('justRotate');
	});
	// if (!shape.hasClass('justRotate')){
	// 	shape.addClass('justRotate');
	// }
	// else {
	// 	(shape.hasClass('justRotate'))
	// 	shape.removeClass('justRotate');
	// 	shape.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
	// 		shape.addClass('justRotate');
	// 	});
	// }
}