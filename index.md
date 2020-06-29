---
layout: default
lang: nl
lang-ref: covid19-notification-app-website-index
---

<div class="lead">
  <div class="lead__text">
    <h2>Wat doet de app?</h2>

    <p>De corona-app waarschuwt je als je in de buurt bent geweest van iemand die het coronavirus heeft. En helpt de verdere verspreiding van het virus te stoppen.</p>
  </div>

  <div class="lead__preview">
    <img src="{{ relroot }}img/app-preview.png" alt="{{ site.data.translations.app-preview[page.lang] }}" class="app-preview">
    <div class="lead__preview__slider">
      <div class="info-slider">
        <div class="info-slider__slides">
          <!-- Swipe.JS Slider main container -->
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  {% for info-slide in site.data.translations.info-slides[page.lang] %}
                  <div class="swiper-slide">
                    <div class="info-slide">
                      <div class="info-slide__graphic" aria-hidden="true">
                        <!-- Note: pro-active lazy-load by Swipe.JS -->
                        <img data-src="{{ relroot }}img/info-slider/{{ info-slide.image }}.svg" class="swiper-lazy">
                      </div>
                      <div class="info-slide__text">
                        <h3>{{ info-slide.title | markdownify }}</h3>
                        {{ info-slide.content | markdownify }}
                      </div>
                    </div>
                  </div>
                  {% endfor %}
              </div>
              <!-- If we need pagination -->
              <div class="swiper-pagination"></div>
              <!-- If we need navigation buttons -->
              <button type="button" class="swiper-button-prev" aria-hidden="true"></button>
              <button type="button" class="swiper-button-next" aria-hidden="true"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
