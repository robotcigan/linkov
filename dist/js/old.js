var index;

$('.js-open-menu').on('click', function() {
  return $('.menu').slideDown();
});

$('.js-close-menu').on('click', function() {
  return $('.menu').slideUp();
});

index = 0;

$('body').on('mousewheel', function(event) {
  if (event.deltaY < 0) {
    index++;
    if (index >= 5) {
      index = 5;
    }
  } else {
    index--;
    if (index <= 0) {
      index = 0;
    }
  }
  console.log(index);
  $('.main-content .slide').eq(0).removeClass('slide--active');
  return $('.main-content .slide').eq(1).addClass('slide--active');
});
