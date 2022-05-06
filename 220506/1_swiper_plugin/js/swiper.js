var swiper = new Swiper(".slider-container", {
  pagination: {
    el: '.swiper-pagination', //밑에 넘어가는거 생김
    clickable: true, //클릭했을때 작동되게
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var mySwiper = new Swiper(".my-container", {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

});
