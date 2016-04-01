$(document).ready(function() {

	var scroll = function(where){
        $('html, body').animate({
            scrollTop: where.offset().top
        }, 500);
    };

    $('.tlt').textillate({
        loop: true,
        minDisplayTime: 1000,
        initialDelay: 0,
        autoStart: true
    });

  $('#about').on('click', function(){
      $('.about').removeClass('hide').addClass('show');
      $('.work').removeClass('show').addClass('hide');
      $('.hobbies').removeClass('show').addClass('hide');
      scroll($('#buffer'));
      $('#up').removeClass('hide');
  });

  $('#work').on('click', function(){
      $('.work').removeClass('hide').addClass('show');
      $('.about').removeClass('show').addClass('hide');
      $('.hobbies').removeClass('show').addClass('hide');
      scroll($('#buffer'));
      $('#up').removeClass('hide');
  });

  $('#hobbies').on('click', function(){
      $('.hobbies').removeClass('hide').addClass('show');
      $('.about').removeClass('show').addClass('hide');
      $('.work').removeClass('show').addClass('hide');
      scroll($('#buffer'));
      $('#up').removeClass('hide');
  });

  $('#up').on('click', function(){
    $('.work').removeClass('show').addClass('hide');
    $('.about').removeClass('show').addClass('hide');
    $('.hobbies').removeClass('show').addClass('hide');
    $('#up').addClass('hide');
	});

	
});