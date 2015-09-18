$('#trans-shape').click(function(){
	$(this).addClass('colorShape');
	$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
		$(this).addClass('resizeShape');
		$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
			$(this).addClass('rotateShape');
		});
    });
})