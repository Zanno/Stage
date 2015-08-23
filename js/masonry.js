/*// Masonry
$('.gallery').masonry({
  // options
  itemSelector: '.image-gallery',
  columnWidth: '.image-gallery',
  gutter: 10
});*/


var $grid = $('.gallery').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    // options
    itemSelector: '.image-gallery',
    columnWidth: '.image-gallery',
    gutter: 10
  });
});

// Ajax load content
$('.content ul li a').click(function(e) {
  e.preventDefault();
  var a_href = $(this).attr('href');

  switch (a_href) {
    case "#squared":
      var a_url = "squared.html";
      break;
    case "#rounded":
      var a_url = "rounded.html";
      break;
    return a_url;
  }

  $.ajax({
    url: a_url,
    success: function(data) {
      $.getScript("js/masonry.js");
      $('.content').hide().html(data).fadeIn();
    }
  });

});