"use strict";

$(document).ready(function() {

    $('.selectpicker').selectpicker();

    $(":input").inputmask();

    // logo animate 

    var src = $(".logo img").attr('src');
    var timer;
    $(".logo img").hover(function() {
        var _this = $(this);
        _this.attr('src', src.replace('.svg', '-animate.png'));
        timer = setTimeout(function() {
            _this.attr('src', src);
        }, 900);
    }, function() {
        $(this).attr('src', src);
        clearTimeout(timer);
    });

    // search 

    $(document).on('click', '.search-show', function() {
        $('header .search').css('display', 'flex');
        $('.search-show, .navbar-nav').hide();
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('header .search').length > 0 && !$(event.target).closest('.search-show').length > 0) {
            $('header .search').hide();
            $('.search-show, .navbar-nav').show();
        }
    });

    // search Header 

    $('.search__form input').keyup(function() {
        var _this = $(this);
        if (_this.val().length != 0) {
            $('.search__form .search__reset').show();
        } else {
            $('.search__form .search__reset').hide();
        }
    });
    $(document).on('click', '.search__form .search__reset', function() {
        $(this).hide();
    });

    // mobile Header

    $('.language').clone().appendTo('.mobileNav');
    $('.header__links-wrapper').clone().appendTo('.mobileNav');

    $(document).on('click', '.navbar-toggler', function() {
        $('body, html').toggleClass('noscroll-y');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.navbar')) {
            $('body, html').removeClass('noscroll-y');
        }
    });

    // mobile Footer

    $(".footer__menu-list, .accordion .collapse, .navbar-collapse").on('show.bs.collapse', function() {
        $(this).prev().addClass('active');
    });
    $(".footer__menu-list, .accordion .collapse, .navbar-collapse").on('hide.bs.collapse', function() {
        $(this).prev().removeClass('active');
    });

    // sliders

    $('.main-slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        items: 1,
        autoplay: true,
        navText: ['<i class="material-icons">&#xe5cb;</i>', '<i class="material-icons">&#xe5cc;</i>']
    });

    $('.statistics__slider').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        autoplay: true,
        navText: ['<i class="material-icons">&#xe5cb;</i>', '<i class="material-icons">&#xe5cc;</i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    $('.instruction__slider').owlCarousel({
        margin: 0,
        dots: false,
        nav: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true
            },
            768: {
                items: 3,
                loop: false
            }
        }
    });

    $('.useful-links__slider').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        nav: true,
        autoplay: true,
        navText: ['<i class="material-icons">&#xe5cb;</i>', '<i class="material-icons">&#xe5cc;</i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    var owlCarouselDotsFunc;
    (owlCarouselDotsFunc = function owlCarouselDotsFunc() {
        $('.owl-carousel').each(function() {
            var _this = $(this);
            var _dotsWidth = _this.find('.owl-dots').innerWidth() + 14;

            _this.find('.owl-nav .owl-prev').css('margin-right', _dotsWidth);
        });
    })();

    $('.gallery.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        infinite: false,
        fade: true,
        autoplaySpeed: 3000,
        asNavFor: '.slider-nav'
    });
    $('.gallery.slider-nav').slick({
        slidesToShow: 6,
        infinite: false,
        arrows: true,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        autoplaySpeed: 3000,
        nextArrow: '<i class="material-icons slick-next">&#xe5cc;</i>',
        prevArrow: '<i class="material-icons slick-prev">&#xe5cb;</i>',
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4
            }
        }]
    });

    if (window.innerWidth > 1024) {
        if ($('.gallery.slider-nav .slick-track .slick-slide:not(.slick-cloned)').length <= 6) {
            $('.gallery.slider-nav .slick-track').addClass('notransform');
        }
    }

    //instagram

    if ($(".instagram .instagram__gallery").length > 0) {
        var $insta = $(".instagram .instagram__gallery .instagram__link");
        var insta_len = $insta.length;
        var instaHeight = $('.instagram .instagram__gallery').height();

        for (var i = 0; i < insta_len - 1; i++) {
            var insta_t = $insta.eq(i).children('img').height() + $insta.eq(i + 1).children('img').height();

            if (insta_t >= instaHeight || $(window).width() < 768) {
                $insta.eq(i).wrap('<div class="item"></div>');
            } else if (insta_t < instaHeight) {
                $insta.slice(i, i + 2).wrapAll('<div class="item"></div>');
                i++;
            }
        }
        $(".instagram .instagram__gallery .instagram__link>img").css('width', '100%');

        $('.instagram .instagram__gallery .owl-carousel').owlCarousel({
            stagePadding: 80,
            margin: 10,
            nav: true,
            loop: !0,
            dot: false,
            navText: ['<i class="material-icons">&#xe5cb;</i>', '<i class="material-icons">&#xe5cc;</i>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 4
                },
                1000: {
                    items: 5
                },
                1440: {
                    items: 7
                }
            }
        });
    }

    // activity Block

    var activityFunc;
    (activityFunc = function activityFunc() {
        var activityItem = $('.activity .activity__item');

        if (window.innerWidth < 992) {

            activityItem.hide();
            $('.activity__more').show();

            for (var i = 0; i < 4; i++) {
                activityItem.eq(i).show();
            }
            $(document).on('click', '.activity__more', function(e) {
                e.preventDefault();
                activityItem.show();
                $(this).hide();
            });
        } else {
            activityItem.show();
        }
    })();

    $(".show-more").on('show.bs.collapse', function() {
        $(this).prev().find('button').removeClass('btn--main');
    });
    $(".show-more").on('hide.bs.collapse', function() {
        $(this).prev().find('button').addClass('btn--main');
    });

    // upload Block

    $('#application_file_video').change(function() {
        var val = $(this).val();
        var filename = val.replace(/^.*\\/, "");
        $(this).parent().prev().text(filename);
    });

    $('#application_file_image').change(function() {
        var val = $(this).val();
        var filename = val.replace(/^.*\\/, "");
        $(this).parent().prev().text(filename);
    });

    // video 

    $(document).on('click', '.video__play', function() {
        var poster = $(this).prev().attr('src');
        var src = $(this).prev().attr('data-src');

        var video = '<video poster="' + poster + '" playsinline style="width: 100%" id="video">' + '<source src="' + src + '" type="video/mp4">' + '</video>';

        $('#videoModal .modal-body .video-wrapper').html(video);
    });

    $('#videoModal').on('hidden.bs.modal', function(e) {
        $(this).find('video').trigger('pause');
        $('.play-btn').show();
    });
    $(document).on('click', '.play-btn', function() {
        $('#videoModal video').attr('controls', true).trigger('play');
        $(this).hide();
    });

    // modal Block

    $('.modal:not(#videoModal)').on('show.bs.modal', function(e) {
        $('header, main, footer').addClass('blur');
        $('html, body').addClass('noscroll-y');
    });
    $('.modal:not(#videoModal)').on('hide.bs.modal', function(e) {
        $('header, main, footer').removeClass('blur');
        $('html, body').removeClass('noscroll-y');
    });

    // asideSlide

    $(document).on('click', '.asideSlide__button', function() {
        $(this).parent().toggleClass('active');
        $('body, html').toggleClass('noscroll-y');
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.asideSlide').length > 0) {
            $('body, html').removeClass('noscroll-y');
            $('.asideSlide').removeClass('active');
        }
    });

    // stycky Block

    var socialHeight = ($('.social-list .social-item').length + 1) * 75 + 35;
    $(document).on('click', '.social-button', function() {
        $(this).toggleClass('active');
        $('.social-list , .scroll-top').toggle();
        if ($(window).innerHeight() < socialHeight) {
            $('body, html').toggleClass('noscroll-y');
            $('.social-list').toggleClass('social-list--scroll');
        }
    });

    $(document).on('click touchstart', function(event) {
        if (!$(event.target).closest('.social').length > 0 && !$(event.target).closest('.asideSlide').length > 0) {
            $('.social-button').removeClass('active');
            $('.social-list').hide();
            $('.scroll-top').show();
            $('body, html').removeClass('noscroll-y');
            $('.social-list').removeClass('social-list--scroll');
        }
    });

    $(document).on('click', '.scroll-top', function() {
        $("html").animate({
            scrollTop: 0
        }, 2000);
    });

    var sticky = $('.sticky');
    if (sticky.length > 0) {

        var posBottom = 10;
        var stickyHeight = sticky.outerHeight() + posBottom;

        var stickyPosFunc;
        (stickyPosFunc = function stickyPosFunc() {
            var footerPos = $('footer').offset().top;
            var windowScrollBottom = $(window).scrollTop() + $(window).innerHeight();

            if (windowScrollBottom > footerPos || $(window).scrollTop() < $(window).innerHeight()) {
                sticky.css('position', 'absolute');
                sticky.css('bottom', 'calc(100% + 30px)');
            } else {
                sticky.css('position', 'fixed');
                sticky.css('bottom', '30px');
            }
        })();

        $(window).scroll(function() {
            stickyPosFunc();
        });
    }

    // bottomBar

    $(document).on('click', '.bottomBar__close', function(e) {
        e.preventDefault();
        $('.bottomBar').hide();
    });

    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth;

    window.onresize = function() {

        activityFunc();
        owlCarouselDotsFunc();
        stickyPosFunc();

        var t = w.innerWidth || e.clientWidth || g.clientWidth;
        if (t !== x) {}
    };
});