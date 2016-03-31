$(document).ready(function() {
	console.log('Running');

	$('.tlt').textillate({
		selector: '.textanimate',
		loop: true,
		minDisplayTime: 2000,
		initialDelay: 0,
		autoStart: true
	});
})