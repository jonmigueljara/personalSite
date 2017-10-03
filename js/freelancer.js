(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict



function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};

var Utils = new Utils();


function animateBar(elem)
{
    console.log (elem.val())
    var max = elem.val();
    elem.val(0).animate({ value: max}, { duration: 2000, easing: 'easeOutCirc' });

}




var hasAnimatedJava = false;
var hasAnimatedPython = false;
var hasAnimatedPython = false;
var hasAnimatedR = false;
var hasAnimatedcplusplus = false;
var hasAnimatedSQL= false;
var hasAnimatedSwift = false;
var hasAnimatedHTML = false;
var hasAnimatedJavaScript = false;
var hasAnimatedCSS = false;
var hasAnimatedJquery = false;


$(window).scroll(function() {
  var $target = $("#skills h2");
  var window_offset = $target.offset().top - $(window).scrollTop();


  // console.log(window_offset);

  if (Utils.isElementInView($('progress#java'), false) && !hasAnimatedJava) {
    hasAnimatedJava = true;
    animateBar($('progress#java'))
  }

  if (Utils.isElementInView($('progress#python'), false) && !hasAnimatedPython) {
    hasAnimatedPython = true;
    animateBar($('progress#python'))
  }

  if (Utils.isElementInView($('progress#R'), false) && !hasAnimatedR) {
    hasAnimatedR = true;
    animateBar($('progress#R'))
  }

  if (Utils.isElementInView($('progress#cplusplus'), false) && !hasAnimatedcplusplus) {
    hasAnimatedcplusplus = true;
    animateBar($('progress#cplusplus'))
  }

  if (Utils.isElementInView($('progress#sql'), false) && !hasAnimatedSQL) {
    hasAnimatedSQL = true;
    animateBar($('progress#sql'))
  }

  if (Utils.isElementInView($('progress#swift'), false) && !hasAnimatedSwift) {
    hasAnimatedSwift = true;
    animateBar($('progress#swift'))
  }

  if (Utils.isElementInView($('progress#jquery'), false) && !hasAnimatedJquery) {
    hasAnimatedJquery = true;
    animateBar($('progress#jquery'))
  }

 if (Utils.isElementInView($('progress#HTML'), false) && !hasAnimatedHTML) {
    hasAnimatedHTML = true;
    animateBar($('progress#HTML'))
  }

  if (Utils.isElementInView($('progress#javascript'), false) && !hasAnimatedJavaScript) {
    hasAnimatedJavaScript = true;
    animateBar($('progress#javascript'))
  }

  if (Utils.isElementInView($('progress#css'), false) && !hasAnimatedCSS) {
    hasAnimatedCSS = true;
    animateBar($('progress#css'))
  }



})

// $(window).scroll(function() {


// $('progress').each(function() {
//   // console.log('got here');
//     var max = $(this).val();
//     $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
//       });
// }

   // $('progress').each(function() {
    //     var max = $(this).val();
    //     $(this).val(0).animate({ value: max }, { duration: 2000, easing: 'easeOutCirc' });
    //       });


  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 800,
    scale: 0.3,
    distance: '0px'
  }, 200);

  sr.reveal('.sr-edu', {
    duration: 800,
    scale: 0.3,
    distance: '0px'
  }, 300);

