// TODO: 
// - Add dynamic URL's language?

(function () {
  if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
    window.location.href = 'https://play.google.com/store/apps/details?id=nl.rijksoverheid.en';
  }
  if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
    window.location.href = 'https://apps.apple.com/nl/app/id1517652429';
  }

  window.location.href = "/";
})();
