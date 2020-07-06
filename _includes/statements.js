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

        // WCAG: Focus on statement after animation (which has appeared)
        setTimeout(function () { statementToOpen.querySelector('.details__expanded-box').focus(); }, 200);

        _paq.push(['trackEvent', 'statement', 'nl - open', statementToOpen.querySelector('.statement__content h2').textContent]);        
    }

    function closeStatement() {
        if (openStatementIndex === null) { return; }
        var statementToClose = document.getElementById('statement-' + openStatementIndex);
        statementToClose.setAttribute('class', statementToClose.getAttribute('class').replace(' statements__statement--expanded', ''));

        // WCAG: Focus back on button
        statementToClose.querySelector('.statement-summary__btn-expand').focus();

        openStatementIndex = null;
    }
})();
