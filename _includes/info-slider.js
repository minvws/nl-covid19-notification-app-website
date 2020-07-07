(function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<a class="' + className + '" href="#swiper-slide-' + index + '"><span class="screen-reader-text">Ga naar slide ' + (index + 1) + '</span></a>';
                // TODO: render vanuit liquid en geef juist taal keys
            }
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
        },
    });

    // WCAG SC 2.2.2: Pause, Stop, Hide
    // https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html
    document.querySelector('.info-slider__btn-pause').addEventListener('click', function() {
        mySwiper.autoplay.stop();
    });
})();
