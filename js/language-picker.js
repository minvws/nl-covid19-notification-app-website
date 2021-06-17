(function() {
	var languagePicker = document.querySelector('.language-picker');
    var button = document.querySelector('[aria-controls="language-dropdown"]');
    var listOfLanguages = document.getElementById('language-dropdown');
	var firstInteractive = document.querySelector('.language-picker__link');
	var ariaExpanded;

	if (!languagePicker) return;

    ariaExpanded = button.getAttribute('aria-expanded') === 'true';
    listOfLanguages.setAttribute('hidden', true);

	function toggleLanguagePicker() {
		ariaExpanded = !ariaExpanded;
        button.setAttribute('aria-expanded', ariaExpanded);
        listOfLanguages.removeAttribute('hidden', false);

		if (ariaExpanded) {
			document.documentElement
				.addEventListener('keydown', escapeKeydownHandler, true);
			document.documentElement
				.addEventListener('click', outsideClickHandler, true);
			firstInteractive.focus();
        } else {
            listOfLanguages.setAttribute('hidden', true);
			document.documentElement
				.removeEventListener('keydown', escapeKeydownHandler, true);
			document.documentElement
				.removeEventListener('click', outsideClickHandler, true);
		}
	}

	function escapeKeydownHandler(event) {
		if (event.key === 'Escape' || event.key === 'Esc') {
			toggleLanguagePicker();
			button.focus();
		}
	}

	function outsideClickHandler(event) {
		var target = event.target;
		if (languagePicker.contains(target)) return;
		toggleLanguagePicker();
	}

	button.addEventListener('click', toggleLanguagePicker);
}());
