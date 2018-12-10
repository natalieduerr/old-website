$(document).ready(function () {

    // for on scroll animations
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    
    function check_if_in_view() {
      var windowHeight = $window.height();
      var windowTopPosition = $window.scrollTop();
      var windowBottomPosition = (windowTopPosition + windowHeight);
    
      $.each($animation_elements, function() {
        var $element = $(this);
        var elementHeight = $element.height();
        var elementTopPosition = $element.offset().top;
        console.log(elementTopPosition);
        var elementBottomPosition = (elementTopPosition + elementHeight);
    
        //check to see if this current container is within viewport
        if ((elementBottomPosition >= windowTopPosition) &&
          (elementTopPosition <= windowBottomPosition)) {
          $element.addClass('in-view');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

    // list of links from the root    
    var links = $('.list-of-nav').html();

    // adds the list of links to the mobile menu
    // makes it easier to make changes to the navigation per page
    $('.hamburger__links').append(links);

    // remove the nav__links from the hamburger links, this allows the hamburger__links to display on mobile
    $('.hamburger__links ul').removeClass("nav__links");

    // on click or touch of the hamburger area
    // if the image is currently a hamburger (menu closed)
    // - move the links down so they are visible on screen
    // - change the image to the x
    // if the image is currently an x (menu opened)
    // - move the links back up so they are not visible on screen
    // - change the image to the hamburger

    $('.hamburger').on('click touch', function () {
        if ($('.hamburger img').attr("src") == "hamburger.png") {
            $('.hamburger__links').css("margin-top", "0vh");
            $('.hamburger img').attr("src", "x.png");
            $('.hamburger img').attr('aria-expanded', 'true');
        }
        else if ($('.hamburger img').attr("src") == 'x.png') {
            $('.hamburger__links').css("margin-top", "-100vh");
            $('.hamburger img').attr("src", "hamburger.png");
            $('.hamburger img').attr('aria-expanded', 'false');
        }

    });


    // Open Lightbox
    if($(window).width() >= 1024){
        $('.accent .row img').on('click', function (e) {
            e.preventDefault();
            var image = $(this).attr('src');
            $('html').addClass('no-scroll');
            $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
            if ($(".lightbox-opened img").height() > $(".lightbox-opened").height() ) {
                $(".lightbox-opened img").css("top", "0");
                $(".lightbox-opened img").css("margin-top", "5%");
            }
            else {
                $(".lightbox-opened img").css("top", "auto");
                $(".lightbox-opened img").css("margin-top", "0"); 
            }
        });
    
        // Close Lightbox
        $('body').on('click', '.lightbox-opened', function () {
            $('html').removeClass('no-scroll');
            $('.lightbox-opened').remove();
        });
    
    }
   
});


