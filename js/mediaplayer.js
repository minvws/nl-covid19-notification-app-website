(function() {
    'use strict';
    
    window.addEventListener('load', init);

    function init () {
        mejs.i18n.language(document.documentElement.lang);

        var mediaElem = document.querySelector('video, audio');
        var player = new MediaElementPlayer(mediaElem, {
            shimScriptAccess: 'always',
            features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume', 'a11y', 'fullscreen'],
            alwaysShowControls: true,
            toggleCaptionsButtonWhenOnlyOne: true, // Note: >2 captions? Refactor accessibleCaptionButton()
            success: function(mediaElement, originalNode, instance) {

                // See <git>/_includes/_components/mediaelement.html
                var translations = {
                    btnEnableCaption: originalNode.dataset.translationEnableCaption,
                    btnDisableCaption: originalNode.dataset.translationDisableCaption,
                    btnEnableAudioDescription: originalNode.dataset.translationEnableAudioDescription,
                    btnDisableAudioDescription: originalNode.dataset.translationDisableAudioDescription
                };

                // Subtitle toggle
                // WCAG 4.1.2: label button correctly
                // WCAG 2.1.4: toggle by space bar without pausing video
                accessibleCaptionButton();
                instance.controls.querySelector('.mejs__captions-button button')
                    .addEventListener('click', function() { setTimeout(accessibleCaptionButton, 50); });
                instance.controls.querySelector('.mejs__captions-button button')
                    .addEventListener('keydown', function($e) {
                        if ($e.code === 'Space') { $e.stopPropagation(); } // Automatically generates click
                    });

                function accessibleCaptionButton() {
                    var btn = instance.controls.querySelector('.mejs__captions-button button');
                    var enabled = btn.parentElement.classList.contains('mejs__captions-enabled');
                    var btnText = translations.btnEnableCaption;
                    btn.setAttribute('aria-pressed', enabled);
                    btn.setAttribute('title', btnText);
                    btn.setAttribute('aria-label', btnText);
                    btn.textContent = btnText;
                }

                // Audio (mute) toggle
                // WCAG 2.1.4: toggle by space bar without pausing video
                instance.controls.querySelector('.mejs__volume-button button')
                    .addEventListener('keydown', function($e) {
                        if ($e.code === 'Space') { $e.stopPropagation(); } // Automatically generates click
                    });

                // Audio description toggle
                // WCAG 4.1.2: label button correctly
                // WCAG 2.1.4: toggle by space bar without pausing video
                accessibleAudioDescriptionButton();
                instance.controls.querySelector('.mejs__audio-description-button button')
                    .addEventListener('click', function() { setTimeout(accessibleAudioDescriptionButton, 50); });
                instance.controls.querySelector('.mejs__audio-description-button button')
                    .addEventListener('keydown', function($e) {
                        if ($e.code === 'Space') { $e.stopPropagation(); } // Automatically generates click
                    });

                function accessibleAudioDescriptionButton() {
                    var btn = instance.controls.querySelector('.mejs__audio-description-button button');
                    var enabled = btn.parentElement.classList.contains('audio-description-on');
                    var btnText = translations.btnEnableAudioDescription;
                    btn.setAttribute('aria-pressed', enabled);
                    btn.setAttribute('title', btnText);
                    btn.setAttribute('aria-label', btnText);
                    btn.textContent = btnText;
                }

                // Audio (mute) toggle
                // WCAG 2.1.4: toggle by space bar without pausing video
                instance.controls.querySelector('.mejs__fullscreen-button button')
                    .addEventListener('keydown', function($e) {
                        if ($e.code === 'Space') { $e.stopPropagation(); } // Automatically generates click
                    });
            }
        });


        var playerContainer = document.querySelector('#mep_0');
        if (playerContainer) {
            playerContainer.setAttribute('role', 'group');
        }
    }
})();
