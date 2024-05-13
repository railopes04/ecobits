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
  slidesPerView: 1.3,
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
    slidesPerView: 3,
    spaceBetween: 25,
  },
}
});

//===============Back to top===============//
// Mostra ou oculta o botão baseado na posição de rolagem
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  var button = document.getElementById("back-to-top");
  var conteudoTopo = document.getElementById("bl-sobre").getBoundingClientRect().top;
  
  if (conteudoTopo < 0) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
// Faz a página rolar para o topo quando o botão é clicado
function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
