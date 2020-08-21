---
layout: content
lang: nl
showBreadCrumbs: true
showContact: true
title: Veelgestelde vragen
---

# {{ page.title }}


{% assign questions = site.questions | where:"lang", page.lang | sort: "index"  %}

## Hoe de app helpt tegen corona?
{: .faq-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout-contents__list">
    {% for question in questions %}
        {% if question.set == 1 %}
            <li>
                <a class="faq-layout__item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>


## Werking van de app
{: .faq-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout-contents__list">
    {% for question in questions %}
        {% if question.set == 2 %}
            <li>
                <a class="faq-layout__item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>


## Testregios's Twente en Drenthe
{: .faq-layout__title}

<div class="faq-layout__contents __overview">
    <ul class="faq-layout-contents__list">
    {% for question in questions %}
        {% if question.set == 3 %}
            <li>
                <a class="faq-layout__item" href="{{ question.url }}" id="faq-{{ question.index }}">
                    {{ question.title }}
                </a>
            </li>
          {% endif %}
    {% endfor %}
    </ul>
</div>
