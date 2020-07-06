(function() {
    _paq.push(['setCustomDimension', 1, document.documentElement.lang]);
    
    // TODO: Carrousel

    // Statement: go to git /_layouts/statements.js

    // Accordion
    var accordions = document.querySelectorAll('[data-js-stats-accordion]');
    for (var iAccordion = 0; iAccordion < accordions.length; iAccordion++) {
        accordions[iAccordion].addEventListener('toggle', function(event) {
            if (event.currentTarget.dataset['jsStatsAccordion'] !== undefined) {
                _paq.push(JSON.parse(event.currentTarget.dataset['jsStatsAccordion']));
            }
        });
    }

    // Form feedback (incl. form interaction)
    var feedbackBtns = document.querySelectorAll('[data-js-stats-form-feedback-btn]');
    for (var iBtn=0; iBtn < feedbackBtns.length; iBtn++) {
        feedbackBtns[iBtn].addEventListener('click', function(event) {
            var statsEvent = event.currentTarget.parentElement.dataset['jsStatsEvent'];
            var statsFeedback = event.currentTarget.dataset['statsFeedback'];
            statsEvent = statsEvent.replace('--statsFeedback--', statsFeedback);
            console.log(statsEvent);

            var questionComponent = event.currentTarget.parentElement;
            questionComponent.setAttribute('class', questionComponent.getAttribute('class') + ' feedback__question--hide');

            var answeredComponent = event.currentTarget.parentElement.parentElement.querySelector('.feedback__answered[data-stats-feedback="'+statsFeedback+'"]');
            console.log(answeredComponent);
            answeredComponent.setAttribute('class', answeredComponent.getAttribute('class').replace('feedback__answered--hide', ''));
            answeredComponent.focus();

            _paq.push(JSON.parse(statsEvent));
        });
    }
})();