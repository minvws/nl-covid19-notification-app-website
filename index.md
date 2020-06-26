---
layout: default
lang: nl
lang-ref: covid19-notification-app-website-index
---

<div class="lead">
  <div class="lead__text">
    <h2>Wat doet de app?</h2>

    <p>De corona-app waarschuwt je als je in de buurt bent geweest van iemand die het coronavirus heeft. En helpt de verdere verspreiding van het virus te stoppen.</p>

    <ul>
      <li>Bescherm je familie en vrienden</li>
      <li>Help een tweede coronagolf voorkomen</li>
      <li>100% anoniem</li>
    </ul>
  </div>

  <div class="lead__preview">
    <img src="{{ relroot }}img/app-preview.png" alt="{{ site.data.translations.app-preview[page.lang] }}" class="app-preview">
    <div class="info-slider">
      <div class="info-slider__slides">
        {% for slide in site.data.translations.info-slides %}
          <div class="info-slider__slides__slide">
            <div class="info-slide">
              <div class="info-slide__graphic" aria-hidden="true">
                <img src="{{ relroot }}img/info-slider/{{ slide.image }}.svg"/>
              </div>
              <div class="info-slide__text">
                <h3>
                  {{ slide[page.lang].title | markdownify }}
                </h3>
                <p>
                  {{ slide[page.lang].content | markdownify }}
                </p>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </div>
</div>
