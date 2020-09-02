(function () {
    if( typeof prevSlide == "undefined") var prevSlide = 'Previous slide';
    if( typeof nextSlide  == "undefined") var nextSlide = 'Next slide';
    if( typeof firstSlide  == "undefined") var firstSlide = 'This is the first slide';
    if( typeof lastSlide  == "undefined") var lastSlide = 'This is the last slide';

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,

        keyboard: {
            enabled: true,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<button role="button" class="' + className + '"><span class="screen-reader-text">' + bulletSlide + (index + 1) + '</span></button>';
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

        a11y: {
            enabled: true,
            prevSlideMessage: prevSlide,
            nextSlideMessage: nextSlide,
            firstSlideMessage: firstSlide,
            lastSlideMessage: lastSlide,
        },
    });
})();
