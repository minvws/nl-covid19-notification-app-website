(function () {
    var htmlEl = document.querySelector('html');
    htmlEl.setAttribute('class', (htmlEl.getAttribute('class') || '') + ' js-enabled');

    if (window.navigator.userAgent.indexOf('MSIE') >= 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' browser-ie-11');
    }
})();