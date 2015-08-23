// Ajax load content
$('.menu > li > a').click(function(e) {
  e.preventDefault();
  var a_href = $(this).attr('href');

  switch (a_href) {
    case "#introduction":
      var a_url = "introduction.html";
      break;
    case "#brand":
      var a_url = "brand.html";
      break;
    case "#squared":
      var a_url = "squared.html";
      break;
    case "#rounded":
      var a_url = "rounded.html";
      break;
    case "#internal":
      var a_url = "internal.html";
      break;
    case "#gallery":
      var a_url = "gallery.html";
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
      $('.content').hide().html(data).fadeIn();
    }
  });

});
// Active menu element
$('.menu').each(function(index){
  $(this).children('li').first().children('a').addClass('active');
});
$('.menu > li > a').click(function(event) {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $(this).parents('li').siblings().find('a').removeClass('active');
  }
});
// Jumping to h2 position
$.mark = {
  jump: function (options) {
    var defaults = {
      selector: 'a.scroll-on-page-link'
    };
    if (typeof options == 'string') {
      defaults.selector = options;
    }
    options = $.extend(defaults, options);
    return $(options.selector).click(function (e) {
      var jumpobj = $(this);
      var target = jumpobj.attr('href');
      var thespeed = 1000;
      var offset = $(target).offset().top;
      $('html,body').animate({
        scrollTop: offset
      }, thespeed, 'swing');
      e.preventDefault();
    });
  }
};
$.mark.jump();




$('.extended-menu-action').click(function (e) {
  $(this).hide().parents('.header-right').find('.main-menu').addClass('show');
});
$('.collapsed-menu-action').click(function (e) {
  $(this).closest('.header-right').find('.main-menu').removeClass('show');
  $(this).closest('.header-right').find('.extended-menu-action').show();
});