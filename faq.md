---
layout: content
lang: nl
showHomeBtn: true
---

# Veelgestelde vragen

{% assign questions = site.questions | where:"lang", page.lang | sort: "index"  %}

## Hoe de app helpt tegen corona?
{: .fag-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout__contents__list">
    {% for question in questions %}
        {% if question.set == 1 %}
            <li>
                <a class="fag-item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>


## Werking van de app
{: .fag-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout__contents__list">
    {% for question in questions %}
        {% if question.set == 2 %}
            <li>
                <a class="fag-item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>


## Testregios's Twente en Drenthe
{: .fag-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout__contents__list">
    {% for question in questions %}
        {% if question.set == 3 %}
            <li>
                <a class="fag-item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>
