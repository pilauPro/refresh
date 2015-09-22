// $('#trans-shape').click(function(){
// 	$(this).addClass('rotateShape');
// 	$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
// 		$(this).addClass('resizeShape');
// 		$(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
// 			$(this).addClass('rotateShape');
// 		});
//     });
// })

$('#colorBtn').click(function(){
	var shape = $('#trans-shape')

	shape.addClass('colorShape');
})
$('#sizeBtn').click(function(){
	var shape = $('#trans-shape')
	shape.removeClass('colorShape');
	shape.addClass('resizeShape');
})
$('#rotateBtn').click(function(){
	var shape = $('#trans-shape')
	shape.removeClass('resizeShape');
	shape.addClass('rotateShape');
})