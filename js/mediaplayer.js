(function() {
    'use strict';
    
    window.addEventListener('load', init);

    function init () {
        mejs.i18n.language(document.documentElement.lang);

        $('video, audio').mediaelementplayer({
            shimScriptAccess: 'always',
            features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'a11y', 'fullscreen'],
            alwaysShowControls: true
        });
    }
})();
