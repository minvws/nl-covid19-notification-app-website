---
layout: default
title: Op weg naar een veilige en betrouwbare Covid-19 notificatie app
lang: nl
lang-ref: covid19-notification-app-status-index
---

<h2>Huidige stand van zaken</h2>

<p>Hoe zorgen we voor een app die we allemaal kunnen gebruiken? En hoe garanderen we dat niemand ongewenst bij onze
    gegevens kan? Er wordt onderzoek gedaan naar álle factoren. En zijn deze afgerond? Pas dan is er een werkbare
    app.</p>

<div class="statements">
{% assign features = site.features | where:"lang", page.lang %}
{% for feature in features %}
<details class="{{ feature.status }}">
    <summary>
        <h2>{{ feature.title }}</h2>
        <span>{{ feature.summary }}</span>
    </summary>
    {{ feature.content }}
</details>
{% endfor %}
</div>
