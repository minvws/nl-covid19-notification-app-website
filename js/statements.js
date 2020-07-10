(function () {
    var openStatementIndex = null;

    var btnsOpen = document.querySelectorAll('[data-js-btn-open-statement]');
    for(var i=0; i < btnsOpen.length; i++) {
        btnsOpen[i].addEventListener('click', function(event) {
            openStatement(event.currentTarget.dataset['jsBtnOpenStatement']);
        });
    }

    var btnsClose = document.querySelectorAll('[data-js-btn-close-statement]');
    for(var i=0; i < btnsClose.length; i++) {
        btnsClose[i].addEventListener('click', function(event) {
            closeStatement();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') { closeStatement(); }
    });

    function openStatement(index) {
        if (openStatementIndex !== null) { return; }
        openStatementIndex = index;

        var statementToOpen = document.getElementById('statement-' + openStatementIndex);
        statementToOpen.setAttribute('class', statementToOpen.getAttribute('class') + ' statements__statement--expanded');
        document.querySelector('html').setAttribute('class', document.querySelector('html').getAttribute('class') + ' html-no-scroll');

        var dialog = statementToOpen.querySelector('.details__expanded-box');
        // WCAG: Focus on statement after animation (which has appeared)
        setTimeout(function () {
            dialog.focus();
            trapFocus(dialog);
        }, 200);

        _paq.push(['trackEvent', 'statement', '{{ document.documentElement.lang }} - open', statementToOpen.querySelector('.statement__content h2').textContent]);
    }

    function closeStatement() {
        if (openStatementIndex === null) { return; }
        var statementToClose = document.getElementById('statement-' + openStatementIndex);
        statementToClose.setAttribute('class', statementToClose.getAttribute('class').replace(' statements__statement--expanded', ''));

        // WCAG: Focus back on button
        document.querySelector('html').setAttribute('class', document.querySelector('html').getAttribute('class').replace('html-no-scroll', ''));
        statementToClose.querySelector('.statement-summary__btn-expand').focus();
        openStatementIndex = null;
    }

    // Thanks to Hidde de Vries: https://hiddedevries.nl/en/blog/2017-01-29-using-javascript-to-trap-focus-in-an-element
    function trapFocus(element) {
        var focusableEls = element.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),
            firstFocusableEl = focusableEls[0],
            lastFocusableEl = focusableEls[focusableEls.length - 1],
            KEYCODE_TAB = 9;
    
        element.addEventListener('keydown', function(e) {
            var isTabPressed = (e.key === 'Tab' || e.keyCode === KEYCODE_TAB);
    
            if (!isTabPressed) { 
                return; 
            }
    
            if ( e.shiftKey ) /* shift + tab */ {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus();
                    e.preventDefault();
                }
            } else /* tab */ {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus();
                    e.preventDefault();
                }
            }
    
        });
    }

})();
