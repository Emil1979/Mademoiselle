$(document).ready(function () {

    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();

    if ($('.profession-slider').length > 0) {
        $('.profession-slider').owlCarousel({

            loop: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },

                992: {
                    items: 1,
                    margin: 30
                }

            }
        });

    }

    if ($('.blog-slider').length > 0) {
        $('.blog-slider').bxSlider({

            auto: true,
            controls: true,
            nextText: 'Next',
            prevText: 'Prev'

        });

    }



});

