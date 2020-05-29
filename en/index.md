---
layout: default
title: COVID-19 Notification App Status
lang: en
lang-ref: covid19-notification-app-status-index
---
<p>Questions and status of the app are displayed here</p>

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
