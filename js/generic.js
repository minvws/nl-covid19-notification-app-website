(function () {
    var htmlEl = document.querySelector('html');
    htmlEl.setAttribute('class', (htmlEl.getAttribute('class') || '') + ' js-enabled');

    if (window.navigator.userAgent.indexOf('MSIE') >= 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' browser-ie-11');
    }

    // IE isNan from object
    if (!Number.isNan) {
      Object.defineProperty(Number, 'isNaN', {
        value: function(value) {     
          return value !== value;
        }
      });
    }
})();