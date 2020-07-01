---
layout: home
title: Op weg naar een veilige en betrouwbare Covid-19 notificatie app
lang: en
lang-ref: covid19-notification-app-status-index
---

<h2>Current state of affairs</h2>
<p>Questions and status of the app are displayed here</p>

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
