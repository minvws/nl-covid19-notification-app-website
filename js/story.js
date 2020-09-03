(function() {
  window.addEventListener('scroll', function (event) {
    document.querySelectorAll('.stories__story').forEach(function(story) {
        var child = story.querySelector('.stories__story-image');
        if (isInViewport(story)) {
          child.classList.add("fade-in");
        }
    });
  }, false);

})();

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};