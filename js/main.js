$(window).load(function() {
  $.ajax({
    url: 'tpl-introduction.html',
    success: function(data) {
      $('.content').hide().html(data).fadeIn('200');
    }
  });
});
// Ajax load content
$('#menu > li > a').click(function(e) {
  e.preventDefault();
  var a_href = $(this).attr('href');

  switch (a_href) {
    case "#introduction":
      var url = 'tpl-introduction.html';
      break;
    case "#layouts":
      var url = 'tpl-layouts.html';
      break;
    case "#gallery":
      var url = 'tpl-gallery.html';
      break;
    return url;
  }
  $.ajax({
    url: url,
    success: function(data) {
      if (url == 'tpl-gallery.html'){
        $.getScript("js/masonry.js");
      }
      $('.content').hide().html(data).fadeIn('200');
    }
  });

});

// Active menu element
$('#menu').each(function(index){
  $(this).children('li').first().children('a').addClass('active');
});
$('#menu > li > a').click(function(event) {
  if (!$(this).hasClass('active')) {
    $(this).addClass('active');
    $(this).parents('li').siblings().find('a').removeClass('active');
  }
});

// Jumping to section position
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

// Mobile-navigation
$('.mobile-navigation button').click(function(){
  $('#menu').addClass('is-active');
  $('.mobile-screen').addClass('is-active');
});
$('.mobile-screen').click(function(){
  $('#menu').removeClass('is-active');
  $(this).removeClass('is-active');
});

// Showing back to top.
$(window).scroll(function() {
  if ($(window).scrollTop() < $(window).height() * 0.1) {
    $('.backtotop').removeClass('is-active');
  } else {
    $('.backtotop').addClass('is-active');
  }
});

// Back to top click event.
$(".backtotop").click(function(e) {
  e.preventDefault();
  $('body, html').animate({
    scrollTop: $('body, html').offset().top
  }, 500);
  return false;
});


//$('.extended-menu-action').click(function (e) {
  //$(this).hide().parents('.header-right').find('.main-menu').addClass('show');
//});
//$('.collapsed-menu-action').click(function (e) {
  //$(this).closest('.header-right').find('.main-menu').removeClass('show');
  //$(this).closest('.header-right').find('.extended-menu-action').show();
//});