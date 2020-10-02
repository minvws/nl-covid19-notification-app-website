(function () {
    var htmlEl = document.querySelector('html');
    htmlEl.setAttribute('class', (htmlEl.getAttribute('class') || '') + ' js-enabled');

    if (window.navigator.userAgent.indexOf('MSIE') >= 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
       htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' browser-ie-11');
    }
    if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
      htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' android');
    }
    if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
      htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' iOS');
    }

})();
