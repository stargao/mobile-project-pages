$(function(){
	$('.joke-content-wrap .joke-list dd.joke-content a.like-btn').click(function(){
		$(this).toggleClass('liked');
	});

	function showCheckInSuccessTips() {
		$('.check-in-tips').removeClass('hidden');
		$(this).addClass('checked-style');
		$('.check-in-tips').animate({
			top: 0,
			opacity: 1},
			500, function() {
				setTimeout(
					function(){
						$('.check-in-tips').animate({
							top: '-60px',
							opacity: 0},
							500, function() {
							$('.check-in-tips').addClass('hidden');
						});
					}, 1500);
		});
	}

	$('.check-in-wrap .check-in-btn').one('click', showCheckInSuccessTips);
});