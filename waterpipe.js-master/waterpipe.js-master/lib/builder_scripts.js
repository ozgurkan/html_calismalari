/*----------------------------------------

Example generator

------------------------------------------*/



$( document ).ready(function() {

	$(window).resize(function() {
		if ($('.sidebar-wrapper').height() > $(window).height()){
			var formHeight = $(window).height()-$('.sidebar-wrapper .intro').outerHeight()-$('.sidebar-wrapper .buttons-wrap').outerHeight()-30;
			$('.generator-form-wrap').css('height', formHeight+'px');
		}
	});

	$(window).resize();

	//Init waterpipe
	var smokyBG = $('#wavybg-wrapper').waterpipe();


});










