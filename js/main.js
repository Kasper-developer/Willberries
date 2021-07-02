const swiper = new Swiper('.swiper-container', {
  loop: true,
  speed: 800,
  autoplay: {
    delay: 6000,
  },
	effect: 'coverflow',

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})
