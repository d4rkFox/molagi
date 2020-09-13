$(function () {
    AOS.init({
        once: true,
        offset: 200,
    });
    // anchor offset ===============================================================
    $("body").on("click", ".header__link", function (e) {
        var fixed_offset = 100;
        $("html,body")
            .stop()
            .animate(
                { scrollTop: $(this.hash).offset().top - fixed_offset },
                0
            );
        e.preventDefault();
    });
    //End anchor offset ===============================================================
    //Start remove class nav-header fixed =============================================
    var header = $(".header");
    var windowHeight = $(window).height();
    $(window).on("scroll", () => {
        if ($(this).scrollTop() >= windowHeight) {
            header.addClass("header--bg");
        } else {
            header.removeClass("header--bg");
        }
    });
    //remove class nav-header fixed =========================================
    // header burger menu ===================================================
    $(".header__btn").on("click", function () {
        $(this).toggleClass("header__btn--on");
        $(".header__list").slideToggle();
    });

    $(".header__link").on("click", function () {
        $(".header__list").css({ display: "none" });
    });

    //End header burger menu ================================================
    // search line===========================================================
    $(".header__btn-search").on("click", function () {
        $(".header__search").addClass("header__search--active");
    });

    $(".header__btn-close").on("click", function () {
        $(".header__search").removeClass("header__search--active");
    });
    //End search line=========================================================

    $(".info__play")
        .fancybox({
            baseClass: "info__wrapper",
            afterClose: function () {
                $(".info__video-wrapper").removeClass(
                    "info__video-wrapper--on"
                );
            },
        })
        .on("click", function () {
            $(".info__video-wrapper").addClass("info__video-wrapper--on");
        });

    // mixitup button gallery=================================================
    $(".projects__btn").on("click", function () {
        $(".projects__btn--active").removeClass("projects__btn--active");
        $(this).addClass("projects__btn--active");
    });
    //end mixitup button=======================================================

    //start projects gallery===================================================
    $(".projects__btn-close").on("click", function () {
        $(".projects__top").addClass("projects__top--height");
        $(".projects__top-slide").removeClass("projects__top-slide--on");
    });
    var windowWidth = $(window).width();

    $(".projects__item").on("click", function () {
        if (windowWidth >= "992") {
            $(".projects__top-slide").addClass("projects__top-slide--on");
            if ($(".projects__top").hasClass("projects__top--height")) {
                $(".projects__top").removeClass("projects__top--height");
            } else {
                $(".projects__top").addClass("projects__top--slide");
                var deleteClass = function () {
                    $(".projects__top").removeClass("projects__top--slide");
                };
                setTimeout(deleteClass, 2000);
            }
        }
    });
    //end projects gallery=====================================================
    //Focus effect section personal============================================
    $(".social__link").focus(function () {
        $(".personal__wrapper-img").removeClass("personal__wrapper-img--focus");
        $(this)
            .closest(".personal__wrapper-img")
            .addClass("personal__wrapper-img--focus");
    });
    //END Focus effect section personal========================================
    // focus gallery===========================================================
    $(".projects__btn-slide")
        .focus(function () {
            $(".projects__slide").removeClass("projects__slide--focus");
            $(this)
                .closest(".projects__slide")
                .addClass("projects__slide--focus");
        })
        .blur(function () {
            $(".projects__slide").removeClass("projects__slide--focus");
        });
    // Endfocus gallery========================================================
    // Block prices focus and hover effect=====================================

    $(".prices__btn").on("click", function () {
        $(".prices__btn").removeClass("prices__btn--on");
        $(".prices__num").removeClass("prices__num--active");
        $(this)
            .closest(".prices__card")
            .find(".prices__num")
            .addClass("prices__num--active");
        $(this).addClass("prices__btn--on");
    });

    $(".prices__btn").hover(
        function () {
            $(this)
                .closest(".prices__card")
                .find(".prices__num")
                .addClass("prices__num--on");
        },
        function () {
            $(".prices__num").removeClass("prices__num--on");
        }
    );
    //END block prices focus and hover effect==========================================

    // swiper slider====================================================================
    var sliderTop = new Swiper(".slider__container", {
        loop: true,
        autoplay: { delay: 5000 },
        simulateTouch: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // end swiper slider================================================================

    //start Swiper modal window =========================================================
    var galleryThumbs = new Swiper(".projects__thumbs", {
        slidesPerView: 6,
        allowTouchMove: false,
        breakpoints: {
            320: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 6,
            },
        },
    });

    var galleryTop = new Swiper(".projects__top", {
        effect: "fade",
        thumbs: {
            swiper: galleryThumbs,
        },
    });
    //end Swiper modal window =================================================================
    //start benefit tabs(gallery)==============================================================
    $(".benefits__tab").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".benefits")
            .find(".benefits__item")
            .removeClass("benefits__item--active")
            .hide();
        $(".benefits__tabs")
            .find(".benefits__tab")
            .removeClass("benefits__tab--active");
        $(this).addClass("benefits__tab--active");
        $("#" + id)
            .addClass("benefits__item--active")
            .fadeIn();
        return false;
    });
    //end benefit tabs(gallery)=============================================================
    //start products gallery================================================================

    $(".products__btn").on("click", function () {
        $(".products__card").removeClass("products__card--off");
        $(this).addClass("products__btn--off");
    });

    $(".products__card").on("click", function (event) {
        var id = $(this).attr("data-id");
        $(".products")
            .find(".products__item")
            .removeClass("products__item--active")
            .hide();
        $(".products__card-wrapper")
            .find(".products__card")
            .removeClass("products__card--active");
        $(this).addClass("products__card--active");
        $("#" + id)
            .addClass("products__item--active")
            .fadeIn();
        return false;
    });
    //end products gallery====================================================================
    // plugin viewportChecker ================================================================

    var width = $(window).width();

    if (width >= "576") {
        $(".statistics__count").viewportChecker({
            callbackFunction: function () {
                $(".statistics__count").each(function () {
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            {
                                Counter: $(this).text(),
                            },
                            {
                                duration: 3500,
                                easing: "swing",
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                });
            },
        });
    }
    //End plugin viewportChecker ==================================================================
    // parallax plugin=============================================================================
    $(".info").parallax({
        imageSrc: "images/content/paralax-bg.jpg",
        speed: 0.5,
    });

    $(".statistics").parallax({
        imageSrc: "images/content/paralax-bg2.jpg",
        speed: 0.5,
    });
    //End parallax plugin===========================================================================

    // anchor transition input =====================================================================
    $(".link, .benefits__link").on("click", function (e) {
        e.preventDefault();
        $(".feedback__input--first").focus();
    });
    //END anchor transition input ==================================================================
    //E-mail Ajax Send==============================================================================
    $(".feedback__form").submit(function () {
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize(),
        }).done(function () {
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    //Enf E-mail Ajax Send==========================================================================
    var mixer = mixitup(".projects__items", {
        animation: {
            duration: 346,
            nudge: true,
            reverseOut: true,
            effects: "fade rotateZ(180deg) stagger(73ms)",
        },
    });
});
