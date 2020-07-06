(function () {
    var tabbables = document.querySelectorAll('.tabbable');

    for (var i=0; i < tabbables.length; i++) {
        initTabbable(tabbables[i]);
    }

    function initTabbable(tabbable) {
        tabbable.setAttribute('class', tabbable.getAttribute('class') + ' tabbable-js-interactive');

        var tabs = tabbable.querySelectorAll('.tabbable-tab');

        for (var i2=0; i2 < tabs.length; i2++) {
            var tab = tabs[i2];

            tab.addEventListener('click', function () {
                activateTab(event.target);
            });
        }

        function activateTab(tab) {

            // Reset tab actives
            var tabsActive = tabbable.querySelectorAll('.tabbable-tab--active');
            for (var i3=0; i3 < tabsActive.length; i3++) {
                var tabActive = tabsActive[i3];
                tabActive.setAttribute('class', tabActive.getAttribute('class').replace('tabbable-tab--active', ''));
            }
            // Set tab active
            tab.setAttribute('class', tab.getAttribute('class') + ' tabbable-tab--active');

            // Reset tab-panel actives
            var tabPanelsActive = tabbable.querySelectorAll('.tabbable-tab-panel--active');
            for (var i3=0; i3 < tabPanelsActive.length; i3++) {
                var tabPanelActive = tabPanelsActive[i3];
                tabPanelActive.setAttribute('class', tabPanelActive.getAttribute('class').replace('tabbable-tab-panel--active', ''));
            }
            
            // Set tab-panel active
            var tabPanelSelector = tab.getAttribute('href');
            var tabPanel = document.querySelector(tabPanelSelector);
            tabPanel.setAttribute('class', tabPanel.getAttribute('class') + ' tabbable-tab-panel--active');

            window.addEventListener('load', function() {
                initFeedbackBtns();
            });
        }

        activateTab(tabbable.querySelector('.tabbable-tab:first-child'));

        // When entering the page
        if (location.hash !== '') {
            var id = location.hash.replace('#', '');
            var tabPanels = tabbable.querySelectorAll('.tabbable-tab-panel');
            for (var i4=0; i4 < tabPanels.length; i4++) {
                if (tabPanels[i4].getAttribute('id') === id) {
                    activateTab(document.querySelector('a[href="#'+id+'"]'));
                }
            }
        }
    }

    // TODO: automatic detection... window.onhashchange = locationHashChanged;
})();