const swiper = new Swiper('.channel-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1600: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2
        }

    },
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },

});

const recommendSwiper = new Swiper('.recommend-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1600: {
            slidesPerView: 3
        },
        1100: {
            slidesPerView: 2
        }
    },
    // Navigation arrows
    navigation: {
        nextEl: '.recommend-button-next',
        prevEl: '.recommend-button-prev',
    },

});

const recommendChannelSwiper = new Swiper('.recommend-channel-slider', {
    loop: true,
    slidesPerView: 1,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1600: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2
        }

    },
    // Navigation arrows
    navigation: {
        nextEl: '.recommend-channel-button-prev',
        prevEl: '.recommend-channel-button-next',
    },

});

const searchButton = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');

searchButton.addEventListener('click', () => {
    mobileSearch.classList.toggle('is-open');
})

if (document.documentElement.scrollWidth <= 640) {
    swiper.destroy();
    recommendSwiper.destroy();
    recommendChannelSwiper.destroy();
}