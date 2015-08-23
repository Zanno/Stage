// Masonry
var $grid = $('.gallery').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // options
    itemSelector: '.image-gallery',
    columnWidth: '.image-gallery',
    gutter: 10
  });
});