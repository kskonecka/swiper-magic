$(function(){
  console.log("works");

  var mySwiper = new Swiper ('#main-swiper', {
    keyboardControl: true,
    direction: 'vertical',
    speed: 400,
    loop: true,
    pagination: '.swiper-pagination-v',
    paginationType: 'progress',
    paginationHide: false,
    paginationClickable: true,
    // slidesPerView: 'auto',
    centeredSlides: true,
    // spaceBetween: 10,
    parallax: true
  });

  var swiperV = new Swiper('.swiper-container-h', {
    pagination: '.swiper-pagination-h',
    paginationClickable: true,
    loop: true,
    effect: "fade",
    keyboardControl:true
});

var swiperP = new Swiper('.swiper-container-p', {
    pagination: '.swiper-pagination-p',
    paginationClickable: true,
    // nextButton: '.swiper-button-next',
    // prevButton: '.swiper-button-prev',
    parallax: true,
    speed: 600,
    keyboardControl:true
});

});
