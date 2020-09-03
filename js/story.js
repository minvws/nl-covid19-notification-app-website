(function() {
  window.addEventListener('scroll', animateStory);
})();

function animateStory() {
  var stories = document.querySelectorAll('.stories__story');
  var storiesShown = document.querySelectorAll('.stories-image__animate');
  if(storiesShown.length >= stories.length) {
    window.removeEventListener('scroll', animateStory);
    return;
  }

  stories.forEach(function(story) {
    var image = story.querySelector('.stories__story-image');
    var titleSmall = story.querySelector('.stories__story-title-small');
    var title = story.querySelector('.stories__story-title');
    var text = story.querySelector('.stories__story-text');
    if (isInViewport(story)) {
      image.classList.add('stories-image__animate');
      titleSmall.classList.add('stories-title-small__animate');
      title.classList.add('stories-title__animate');
      text.classList.add('stories-text__animate');
    }

  });
}

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
