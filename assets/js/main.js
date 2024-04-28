const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: true,

    // pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    },

    // keyboard control
    keyboard: {
        enabled: true,
    },

    // parallax
    // speed: 600,
    // parallax: true,

    // autoplay
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,  // Keep autoplay running after user interaction
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
