const swiper = new Swiper('.channel-slider', {
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },

});

const recommendSwiper = new Swiper('.recommend-slider', {
    loop: true,
    slidesPerView: 3,
    // Navigation arrows
    navigation: {
        nextEl: '.recommend-button-next',
        prevEl: '.recommend-button-prev',
    },

});

const recommendChannelSwiper = new Swiper('.recommend-channel-slider', {
    loop: true,
    slidesPerView: 6,
    // Navigation arrows
    navigation: {
        nextEl: '.recommend-channel-button-prev',
        prevEl: '.recommend-channel-button-next',
    },

});