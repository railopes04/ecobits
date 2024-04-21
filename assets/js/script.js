//===============Script_do_scroll,rolagem===============//

window.addEventListener("scroll", function(){
  let header = document.querySelector('#header')
  header.classList.toggle('rolagem', window.scrollY > 0)
})

//===============Script carroseel===============//

var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".banner-button-next",
    prevEl: ".banner-button-prev",
  },
});
var swiper = new Swiper(".enderecoSwiper", {
  navigation: {
   nextEl: ".endereco-button-next",
   prevEl: ".endereco-button-prev",
  },
  slidesPerView: 1.5,
  initialSlide: 0,
  loopedSlides: 3,
  visibilityFullFit: true,
  autoResize: true,
  spaceBetween: 25,
  breakpoints: {
  768: {
    slidesPerView: 2,
    spaceBetween: 25,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 25,
  },
}
});
