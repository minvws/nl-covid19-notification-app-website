// TODO: 
// - App store links plaatsen
// - Add dynamic URL's language ?

(function () {
  if(navigator.userAgent.toLowerCase().indexOf("android") > -1){
    window.location.href = 'https://play.google.com/store/apps/';
  }
  if(navigator.userAgent.toLowerCase().indexOf("iphone") > -1){
    window.location.href = 'https://apps.apple.com/';
  }
})();
