"use strict";
//---------------Swiper------------//
function initSwiper() {
  if (document.querySelector(".swiper")) {
    let arrSlid = document.querySelectorAll(".slider");
    arrSlid.forEach((el, i) => {
      window[`slider${i + 1}`] = new Swiper(el, {
        freeMode: true,
        centeredSlides: true,
        direction: "vertical",
        mousewheel: true,
        slidesPerView: 2,
        loop: true,
        spacebetween: 50,
        slidesOffsetBefore: -125,
      });
    });
  }
}
initSwiper();
bindSwipers(slider1, slider2, slider3, slider4);
//---------------------------------//
