$(document).ready(function() {

  // $('.js-open-menu').on('click', function() {
  //   $('.menu').slideDown();
  // });

  // $('.js-close-menu').on('click', function() {
  //   $('.menu').slideUp();
  // });

// var hammertime = new Hammer(myElement, myOptions);
// hammertime.on('pan', function(ev) {
//   console.log(ev);
// });

 // var index = 0;

  $('body').on('mousewheel', function(e) {

    // var count = $('.main-content .slide').length - 1;

    // if (e.deltaY < 0) {
    //   index++;
    //   if (index >= count) {
    //     index = count;
    //   }
    // } else {
    //   index--;
    //   if (index <= 0) {
    //     index = 0;
    //   }
    // }

    // var numbersCount = $('.main-content__numbers').eq(index).find('.main-content__numbers_number').length - 1;

    // console.log(numbersCount);

    $('.main-content .slide').eq(index-1).removeClass('slide--active');
    $('.main-content .slide').eq(index).addClass('slide--active');
    // $('.main-content__numbers_number').eq(index-1).removeClass('main-content__numbers_number--active');
    // $('.main-content__numbers_number').eq(index).addClass('main-content__numbers_number--active');

  });

  // document.onmousemove = handleMouseMove;
  // function handleMouseMove(event) {
  //   var dot, eventDoc, doc, body, pageX, pageY;

  //   event = event || window.event; // IE-ism

  //   // If pageX/Y aren't available and clientX/Y are,
  //   // calculate pageX/Y - logic taken from jQuery.
  //   // (This is to support old IE)
  //   if (event.pageX == null && event.clientX != null) {
  //       eventDoc = (event.target && event.target.ownerDocument) || document;
  //       doc = eventDoc.documentElement;
  //       body = eventDoc.body;

  //       event.pageX = event.clientX +
  //         (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
  //         (doc && doc.clientLeft || body && body.clientLeft || 0);
  //       event.pageY = event.clientY +
  //         (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
  //         (doc && doc.clientTop  || body && body.clientTop  || 0 );
  //   }

  //     // Use event.pageX / event.pageY here

  //   console.log(event.pageX, event.pageY)

  //   var step = 100; 

    // $('.main-img__img').css({
    //  transform: 'translate(-' + event.pageX / step + 'px, -' + event.pageY / step + 'px)'
    // });
    // $('.main-content__right-side').css({
    //  transform: 'translate(' + event.pageX / step + 'px,' + event.pageY / step + 'px)'
    // });
    // $('.main-content__main-text').css({
    //  transform: 'translate(-' + event.pageX / step + 'px, -' + event.pageY / step + 'px)'
    // });



  }

})