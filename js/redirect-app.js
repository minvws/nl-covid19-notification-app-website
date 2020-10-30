// TODO: 
// - Add dynamic URL's language?

(function () {
  var redirectURL = '/';

  if (navigator.userAgent.toLowerCase().indexOf('iphone') > -1) {
    redirectURL = 'https://apps.apple.com/nl/app/id1517652429';
  }
  if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
    redirectURL = 'https://play.google.com/store/apps/details?id=nl.rijksoverheid.en';
  }

  window.location = redirectURL;
})();
