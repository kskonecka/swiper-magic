$(function(){
  console.log("works");

  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    speed: 400,
    keyboardControl: true,
    loop: true,
    pagination: '.swiper-pagination',
    paginationType: 'progress',
    paginationHide: false,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    scrollBar: "swiper-scrollbar"
  });
});
