(function () {
    var htmlEl = document.querySelector('html');
    htmlEl.setAttribute('class', (htmlEl.getAttribute('class') || '') + ' js-enabled');

    if (window.navigator.userAgent.indexOf('MSIE') >= 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' browser-ie-11');
    }

    var userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.indexOf('android') > -1) {
      htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' android');
      htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' google-play-store');

      // Some Huawei devices do not support Google Play Store
      if (userAgent.indexOf('huawei') > -1) {
        htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' huawei-app-gallery');
      }
    }

    if (userAgent.indexOf('iphone') > -1) {
      htmlEl.setAttribute('class', htmlEl.getAttribute('class') + ' iOS');
    }
})();
