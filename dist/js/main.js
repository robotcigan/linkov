$(document).ready(function() {

	$('.js-open-menu').on('click', function() {
		$('.menu').slideDown();
	});

	$('.js-close-menu').on('click', function() {
		$('.menu').slideUp();
	});

// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
//   console.log(ev);
// });

 var index = 0;

	// $('body').on('mousewheel', function(e) {
	$('.main-content__numbers_number').on('click', function() {

		// var count = $('.main-content .slide').length - 1;

		// if (e.deltaY < 0) {
		// 	index++;
		// 	if (index >= count) {
		// 		index = count;
		// 	}
		// } else {
		// 	index--;
		// 	if (index <= 0) {
		// 		index = 0;
		// 	}
		// }

		// console.log($(this).index())
		index = $(this).index();

		// $('.main-content .slide').eq(index-1).removeClass('slide--active');
		// $('.main-content .slide').eq(index).addClass('slide--active');
		// $('.main-content__numbers_number').removeClass('main-content__numbers_number--active');
		// $('.main-content__numbers_number').eq(index).addClass('main-content__numbers_number--active');

		$('.main-content .slide').removeClass('slide--active');
		$('.main-content .slide').eq(index).addClass('slide--active');
		$('.main-content__numbers_number').removeClass('main-content__numbers_number--active');
		$('.main-content__numbers_number').eq(index).addClass('main-content__numbers_number--active');



	});

})


