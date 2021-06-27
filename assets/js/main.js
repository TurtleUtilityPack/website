(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");

    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });

    $.scrollUp({
        scrollText: '<i class="lnr lnr-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    $('.mainmenu-area a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { 
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); 
                            $target.focus(); 
                        };
                    });
                }
            }
        });

    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'iframe',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, 

                duration: 300,
                easing: 'ease-in-out', 

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    magnifPopup();
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);

        new WOW().init({
            mobile: false,
        });
    });
})(jQuery);
