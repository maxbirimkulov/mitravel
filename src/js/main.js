$(document).ready(function () {

    $('.nav__burger').on('click', function () {
        $('.nav__burger, .nav__menu').toggleClass('active')
        $('.nav__link a').on('click', function () {
            $('.nav__burger, .nav__menu').removeClass('active')
        })
    });
    $('#phone').inputmask("+\\9\\96 (999) 99-99-99");
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 400){
            $('.back__top').fadeIn('slow')
        }else{
            $('.back__top').fadeOut('slow')
        }
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,
        items:1,
        nav:false,
        dots:false
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    $('[data-fancybox="gallery"], [data-fancybox="image"]').fancybox({
        loop:true,
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
    });

    $('.owl-carousel2').owlCarousel({
        stagePadding: 200,
        loop:true,
        nav:false,
        items:1,
        lazyLoad: true,
        responsive:{
            0:{
                items:1,
                stagePadding: 60
            },
            600:{
                items:1,
                stagePadding: 100
            },
            1000:{
                items:1,
                stagePadding: 350
            },
            1200:{
                items:1,
                stagePadding: 100
            },
            1400:{
                items:1,
                stagePadding: 200
            },
            1600:{
                items:1,
                stagePadding: 250
            },
            1800:{
                items:1,
                stagePadding: 350
            }
        }
    })
});

