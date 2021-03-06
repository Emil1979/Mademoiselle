
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

//SLIDER-CAROUSEL

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

    //SLIDER-BXSLIDER

    if ($('.blog-slider').length > 0) {
        $('.blog-slider').bxSlider({
            minSlides: 1,
            maxSlides: 4,
            tickerHover: true,
            wrapperClass: '.ext',
            auto: true,
            controls: true,
            nextText: '<span>>></span>',
            prevText: '<span><<</span>'

        });

    }



});

//form validate

if ($('.contact-form').length > 0) {

    $('.contact-form').validate({

        highlight: function (element) {
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight: function (element) {
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'The Name* field is required'
            },
            email: {
                required: 'The Email* field is required',
                email: 'Please provide a valid email address'
            },
            message: {
                required: 'The Message* field is required'
            }
        },

        errorElement: 'p',
        errorPlacement: function (error, element) {
            error.appendTo(element.closest(".form-group").find(".error-msg"));
        }




    });

}