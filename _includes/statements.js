(function () {
    var openStatementIndex = null;

    var btnsOpen = document.querySelectorAll('[data-js-btn-open-statement]');
    for(var i=0; i < btnsOpen.length; i++) {
        btnsOpen[i].addEventListener('click', function(event) {
            // console.log(event, event.currentTarget, event.currentTarget.dataset);
            openStatement(event.currentTarget.dataset['jsBtnOpenStatement']);
        });
    }

    var btnsClose = document.querySelectorAll('[data-js-btn-close-statement]');
    for(var i=0; i < btnsClose.length; i++) {
        console.log(btnsClose[i]);
        btnsClose[i].addEventListener('click', function(event) {
            closeStatement();
        });
    }

    function openStatement(index) {
        console.log(index);
        if (openStatementIndex !== null) { return; }
        openStatementIndex = index;

        var statementToOpen = document.getElementById('statement-' + openStatementIndex);
        console.log(statementToOpen);
        statementToOpen.setAttribute('class', statementToOpen.getAttribute('class') + ' statements__statement--expanded');

        // TODO: Focus on content of statement
        // TODO: Freeze background body scroll
    }

    function closeStatement() {
        if (openStatementIndex === null) { return; }
        var statementToClose = document.getElementById('statement-' + openStatementIndex);
        statementToClose.setAttribute('class', statementToClose.getAttribute('class').replace(' statements__statement--expanded', ''));

        openStatementIndex = null;

        // TODO: Focus back on button
    }
})();
