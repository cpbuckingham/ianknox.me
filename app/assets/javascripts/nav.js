$(document).ready(function () {
  $('.project-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.projects').offset().top
    }, 500);
  });

  $('.github-button').on('click', function () {
    $('html,body').animate({
      scrollTop: $('.github').offset().top
    }, 500);
  });

  var menu = $('.menu');

  $(window).scroll(function () {
    var w = $(window).scrollTop();
    var p = $('.projects').offset().top;
    var g = $('.github').offset().top
    var h = $('.header').height();

    if (w > p && w < g) {
      $('.menu-border').hide();
      menu.removeClass('github-menu').addClass('projects-menu').css('z-index', '1002')
    } else if (w > g) {
      menu.removeClass('projects-menu').addClass('github-menu');
    } else {
      $('.menu-border').show();
      menu.removeClass('projects-menu').css('z-index', '999');
    }
  });

// STICKY MENU //

  function stickyTitles(stickies) {

    var thisObj = this;

    thisObj.load = function () {

      stickies.each(function () {

        var thisSticky = $(this).wrap('<div class="followWrap" />');
        thisSticky.parent().height(thisSticky.outerHeight());

        $.data(thisSticky[0], 'pos', thisSticky.offset().top);

      });

      $(window).off("scroll.stickies").on("scroll.stickies", function () {

        thisObj.scroll();

      });
    };

    thisObj.scroll = function () {

      stickies.each(function (i) {

        var thisSticky = jQuery(this),
          nextSticky = stickies.eq(i + 1),
          prevSticky = stickies.eq(i - 1),
          pos = $.data(thisSticky[0], 'pos');

        if (pos <= jQuery(window).scrollTop()) {

          thisSticky.addClass("stuck");

          if (nextSticky.length > 0 && thisSticky.offset().top >= jQuery.data(nextSticky[0], 'pos') - thisSticky.outerHeight()) {

            thisSticky.addClass("absolute").css("top", jQuery.data(nextSticky[0], 'pos') - thisSticky.outerHeight());
          }

        } else {

          thisSticky.removeClass("stuck");

          if (prevSticky.length > 0 && jQuery(window).scrollTop() <= jQuery.data(thisSticky[0], 'pos') - prevSticky.outerHeight()) {

            prevSticky.removeClass("absolute").removeAttr("style");
          }
        }
      });
    }
  }

  new stickyTitles($(".header")).load();

});