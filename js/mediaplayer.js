(function() {
    'use strict';
    
    window.addEventListener('load', init);

    function init () {
        mejs.i18n.language(document.documentElement.lang);
        var mediaElem = document.querySelector('video, audio');
        var player = new MediaElementPlayer(mediaElem, {
            shimScriptAccess: 'always',
            features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'a11y', 'fullscreen'],
            alwaysShowControls: true
        });
    }
})();
