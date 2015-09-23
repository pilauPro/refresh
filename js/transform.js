$('#animateBtn').click(function(){
	var shape = $('#trans-shape')

	shape.addClass('colorShape');
	shape.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
		shape.addClass('resizeShape');
		shape.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
			shape.addClass('rotateShape');
		});
    });
})
