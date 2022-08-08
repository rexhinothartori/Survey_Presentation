(function($) {
    "use strict";
    jQuery(window).on('load', function() {
        $(".egns-preloader").delay(1600).fadeOut("slow");
    });
    $('select').niceSelect();
    setTimeout(myGreeting, 1800);

    function myGreeting() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function(box) {},
            scrollContainer: null,
            resetAnimation: true,
        });
        wow.init();
    }
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header.style-1, header.style-2, header.style-3,header.style-4');
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    $('.search-btn').on("click", function() {
        $('.mobile-search').addClass('slide');
    });
    $('.search-cross-btn').on("click", function() {
        $('.mobile-search').removeClass('slide');
    });
    $('.mobile-menu-btn').on("click", function() {
        $('.main-nav').addClass('show-menu');
    });
    $('.menu-close-btn').on("click", function() {
        $('.main-nav').removeClass('show-menu');
    });
    $(".main-nav .bi").on('click', function(event) {
        var $fl = $(this);
        $(this).parent().siblings().find('.sub-menu').slideUp();
        $(this).parent().siblings().find('.bi').addClass('bi-chevron-down');
        if ($fl.hasClass('bi-chevron-down')) {
            $fl.removeClass('bi-chevron-down').addClass('bi-chevron-up');
        } else {
            $fl.removeClass('bi-chevron-up').addClass('bi-chevron-down');
        }
        $fl.next(".sub-menu").slideToggle();
    });
    var toggleIcon = document.querySelectorAll('.sidebar-btn')
    var closeIcon = document.querySelectorAll('.cross-icon')
    var searchWrap = document.querySelectorAll('.menu-toggle-btn-full-shape')
    toggleIcon.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
                el.classList.add('show-sidebar')
            })
        })
    })
    closeIcon.forEach((element) => {
        element.addEventListener('click', () => {
            document.querySelectorAll('.menu-toggle-btn-full-shape').forEach((el) => {
                el.classList.remove('show-sidebar')
            })
        })
    })
    window.onclick = function(event) {
        searchWrap.forEach((el) => {
            if (event.target === el) {
                el.classList.remove('show-sidebar')
            }
        })
    }
    var heroSliderTwo = new Swiper('.banner2', {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000
        },
        pagination: {
            el: ".banner2-pagination",
            clickable: true,
        }
    });
    var heroSliderTwo = new Swiper('.banner3', {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 10,
        loop: true,
        centeredSlides: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        navigation: false,
        fadeEffect: {
            crossFade: true,
        },
        autoplay: {
            delay: 4000
        },
        pagination: {
            el: ".banner3-pagination",
            clickable: true,
        }
    });
    var swiper = new Swiper(".service-slider1", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        autoplay: true,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.service-prev1',
            prevEl: '.service-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            480: {
                slidesPerView: 1,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".portfolio-slider1", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 20,
        autoplay: true,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.portfolio-prev1',
            prevEl: '.portfolio-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            480: {
                slidesPerView: 1,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".portfolio-slider2", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 20,
        autoplay: true,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.portfolio-prev2',
            prevEl: '.portfolio-next2',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
                navigation: false,
            },
            480: {
                slidesPerView: 1,
                navigation: false,
            },
            768: {
                slidesPerView: 2,
                navigation: false,
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 4
            },
        }
    });
    var swiper = new Swiper(".portfolio-slider3", {
        slidesPerView: 4,
        speed: 1200,
        spaceBetween: 20,
        autoplay: true,
        centerMode: true,
        loop: true,
        roundLengths: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: 'true',
        },
        navigation: {
            nextEl: '.sponsor-prev1',
            prevEl: '.sponsor-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            },
            1400: {
                slidesPerView: 5,
            },
        }
    });
    var swiper = new Swiper(".testimonial-slider1", {
        slidesPerView: 1,
        speed: 1200,
        autoplay: true,
        spaceBetween: 25,
        loop: true,
        roundLengths: true,
        navigation: {
            nextEl: '.testi-prev1',
            prevEl: '.testi-next1',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        }
    });
    var swiper = new Swiper(".testimonial-slider2", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 25,
        loop: true,
        autoplay: true,
        roundLengths: true,
        navigation: false,
        pagination: {
            el: ".swiper-pagination2",
            clickable: 'true',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        }
    });
    var swiper = new Swiper(".testimonial-slider4", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 25,
        loop: true,
        autoplay: true,
        roundLengths: true,
        pagination: {
            el: '.testimonial4-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: ".testi-prev4",
            prevEl: ".testi-next4",
        },
    });
    var swiper = new Swiper(".testimonial-slider5", {
        slidesPerView: 1,
        speed: 1200,
        autoplay: true,
        spaceBetween: 25,
        loop: true,
        roundLengths: true,
        navigation: {
            nextEl: ".testi-prev4",
            prevEl: ".testi-next4",
        },
        pagination: {
            el: ".testimonial5-pagination",
            clickable: 'true',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            },
            1200: {
                slidesPerView: 3
            },
        }
    });
    var swiper = new Swiper(".blog-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 25,
        loop: true,
        roundLengths: true,
        navigation: false,
        pagination: {
            el: ".swiper-pagination-blog",
            clickable: 'true',
        },
        breakpoints: {
            280: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            },
            992: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 2
            },
        }
    });
    var swiper = new Swiper(".sponsor-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 20,
        loop: true,
        autoplay: true,
        roundLengths: true,
        navigation: {
            nextEl: '.sponsor-prev1',
            prevEl: '.sponsor-next1',
        },
        breakpoints: {
            380: {
                slidesPerView: 2
            },
            530: {
                slidesPerView: 3
            },
            768: {
                slidesPerView: 4
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            },
            1400: {
                slidesPerView: 7
            },
        }
    });
    var swiper = new Swiper(".blog-standard-slider", {
        slidesPerView: 1,
        speed: 1200,
        spaceBetween: 15,
        autoplay: true,
        loop: true,
        roundLengths: true,
        parallax: true,
        effect: 'fade',
        pagination: false,
        navigation: {
            nextEl: '.blogstan-prev1',
            prevEl: '.blogstan-next1',
        },
    });
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function(e) {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }
    const togglePassword2 = document.getElementById('togglePassword2');
    const password2 = document.querySelector('#password2');
    if (togglePassword2) {
        togglePassword2.addEventListener('click', function(e) {
            const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
            password2.setAttribute('type', type);
            this.classList.toggle('bi-eye');
        });
    }
    $(".counter-item").each(function() {
        $(this).isInViewport(function(status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    $(".counter-single").each(function() {
        $(this).isInViewport(function(status) {
            if (status === "entered") {
                for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
                    var el = document.querySelectorAll('.odometer')[i];
                    el.innerHTML = el.getAttribute("data-odometer-final");
                }
            }
        });
    });
    // $('.popup-youtube').magnificPopup({
    //     type: 'iframe'
    // });
}(jQuery));