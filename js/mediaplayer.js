(function() {
    'use strict';
    
    setTimeout(function() { 
      window.addEventListener('load', init);
    }, 50);

    function init () {
        mejs.i18n.language(document.documentElement.lang);
        var mediaElem = document.querySelector('video, audio');
        var player = new MediaElementPlayer(mediaElem, {
            shimScriptAccess: 'always',
            features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'a11y', 'fullscreen'],
            alwaysShowControls: true
        });

        var playPromise = player.play();
        if (playPromise !== undefined) {
          playPromise.then(_ => {
            video.pause();
          })
          .catch(error => {});
        }
        player.pause();
    }
})();
