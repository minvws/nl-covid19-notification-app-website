---
layout: default
title: COVID-19 Notificatie App Status
---
<p>Hier geven we graag uitleg over de vragen en status van de app</p>

{% for feature in site.features %}
<details class="{{ feature.status }}">
    <summary>
        <h2>{{ feature.title }}</h2>
        <span>{{ feature.summary }}</span>
    </summary>
    {{ feature.content }}
</details>
{% endfor %}
