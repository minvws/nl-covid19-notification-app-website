(function() {
  // make IE9+ support forEach:
  if (window.NodeList && !NodeList.prototype.forEach) 
    NodeList.prototype.forEach = Array.prototype.forEach;

  document.querySelector('.stories__story-image').classList.add('stories-image__animate');
  document.querySelector('.stories__story-title-small').classList.add('stories-title-small__animate');
  document.querySelector('.stories__story-title').classList.add('stories-title__animate');
  document.querySelector('.stories__story-text').classList.add('stories-text__animate');
  
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
    if (isInViewport(story) && !story.classList.contains('stories-image__animate') ) {
      image.classList.add('stories-image__animate');
      titleSmall.classList.add('stories-title-small__animate');
      title.classList.add('stories-title__animate');
      text.classList.add('stories-text__animate');
    }

  });
}

function isInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    var clientHeight = window.innerHeight || document.documentElement.clientHeight;
    return (
        bounding.top >= 0 &&
        bounding.bottom - 400 <= clientHeight
    );
};
