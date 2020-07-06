(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // Lazy load images
        lazy: {
            loadPrevNext: true
        },

        autoplay: {
            delay: 3500
        }
    });

    // WCAG SC 2.2.2: Pause, Stop, Hide
    // https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html
    document.querySelector('.info-slider__btn-pause').addEventListener('click', function() {
        mySwiper.autoplay.stop();
    });
})();
