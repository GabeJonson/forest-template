$(document).ready(function() {
  forest.init();
});

var forest = (function() {
  var firstContainer = $('.first-container');
  var firstHeight = firstContainer.innerHeight() - 120;

  return {
    init: function() {
      this.scrollWindow();
      this.smoothScroll();
    },

    scrollWindow: function() {
      var self = this;

      $(window).on('scroll', function() {
        var st = $(this).scrollTop();
        var parralaxScroll = st / 40;

        self.parralax(parralaxScroll);

        if(st > firstHeight) $('header').addClass('sticky');
        else $('header').removeClass('sticky');
      });
    },

    parralax: function(parralaxScroll) {
      $('.parralax').css({
        'background-position': '50% ' + -parralaxScroll + 'px'
      });
      console.log(parralaxScroll)
    },

    smoothScroll: function() {
      $('.next').bind('click', function(e){
        e.preventDefault();

        var anchor = $(this);

        $('html, body').stop().animate({
          scrollTop: $(anchor.attr('href')).offset().top - 80
        }, 500);
      });
    }
  }
})();