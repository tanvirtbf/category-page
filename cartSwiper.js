var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.7,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
});