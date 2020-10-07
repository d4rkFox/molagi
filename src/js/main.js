$(function () {
    AOS.init({
        once: true,
        offset: 200,
    });
    // anchor offset ===============================================================
    $("body").on("click", ".header__link", function (e) {
        $('.header__btn').toggleClass("header__btn--on");
        $(".header__search").removeClass("header__search--active");
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
    // swiper slider====================================================================
    var sliderTop = new Swiper(".slider__container", {
        effect: "fade",
        speed: 2000,
        loop: true,
        autoplay: { delay: 5000 },
        simulateTouch: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // end swiper slider================================================================
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
    //Start remove class nav-header fixed =============================================
    var header = $(".header");
    var windowHeightNavMenu = $(window).height();
    $(window).on("scroll", () => {
        if ($(this).scrollTop() >= windowHeightNavMenu) {
            header.addClass("header--bg");
            header.addClass("header--transition");
        } else {
            header.removeClass("header--bg");
        }
    });
    //remove class nav-header fixed =========================================
    //lazy loading script
    var auxiliaryVariableScroll = 0;
    var info = $(".info");
    var infoTop = info.offset().top;
    $(window).scroll(function () {
        var windowTop = $(this).scrollTop();
        if (windowTop > infoTop && auxiliaryVariableScroll === 0) {
            // fancybox
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
                    $(".info__video-wrapper").addClass(
                        "info__video-wrapper--on"
                    );
                });
            // end fancybox

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
            // mixitup button gallery=================================================
            $(".projects__btn").on("click", function () {
                $(".projects__btn--active").removeClass(
                    "projects__btn--active"
                );
                $(this).addClass("projects__btn--active");
            });
            //end mixitup button=======================================================

            //start projects gallery===================================================
            $(".projects__btn-close").on("click", function () {
                $(".projects__top").addClass("projects__top--height");
                $(".projects__top-slide").removeClass(
                    "projects__top-slide--on"
                );
            });
            var windowWidthProject = $(window).width();

            $(".projects__item").on("click", function () {
                if (windowWidthProject >= "992") {
                    $(".projects__top-slide").addClass(
                        "projects__top-slide--on"
                    );
                    if ($(".projects__top").hasClass("projects__top--height")) {
                        $(".projects__top").removeClass(
                            "projects__top--height"
                        );
                    } else {
                        $(".projects__top").addClass("projects__top--slide");
                        var deleteClass = function () {
                            $(".projects__top").removeClass(
                                "projects__top--slide"
                            );
                        };
                        setTimeout(deleteClass, 2000);
                    }
                }
            });
            //end projects gallery=====================================================
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
            //Focus effect section personal============================================
            $(".social__link").focus(function () {
                $(".personal__wrapper-img").removeClass(
                    "personal__wrapper-img--focus"
                );
                $(this)
                    .closest(".personal__wrapper-img")
                    .addClass("personal__wrapper-img--focus");
            });
            //END Focus effect section personal========================================

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

            $(".partners__img").attr(
                "src",
                "images/content/partners.png"
            );

            $(".maps__location").attr(
                "src",
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142689.8079338905!2d92.72565115517907!3d56.026841952435554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5cd7afc9a1ff37e3%3A0xd597e1468fd647ff!2z0JrRgNCw0YHQvdC-0Y_RgNGB0LosINCa0YDQsNGB0L3QvtGP0YDRgdC60LjQuSDQutGA0LDQuQ!5e0!3m2!1sru!2sru!4v1598957872651!5m2!1sru!2sru"
            );

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
            auxiliaryVariableScroll = 1;
            var windowWidth = $(window).width();

            if (
                windowTop > infoTop &&
                auxiliaryVariableScroll === 1 &&
                windowWidth >= 576
            ) {
                var statScroll = $(".statistics");
                let counter = 0;
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop() + $(window).height();
                    //Если скролл до конца елемента
                    var offset = statScroll.offset().top + statScroll.height();
                    //Если скролл до начала елемента
                    // var offset = statScroll.offset().top;

                    if (scroll > offset && counter == 0) {
                        $(".statistics__count").spincrement({
                            thousandSeparator: "",
                            duration: 3000,
                        });
                        counter = 1;
                        auxiliaryVariableScroll = 2;
                    }
                });
            }
        }
    });
    //End lazy load maps

    // anchor transition input =====================================================================
    $(".link, .benefits__link").on("click", function (e) {
        e.preventDefault();
        $(".feedback__input--first").focus();
    });
    //END anchor transition input ==================================================================

    // // parallax plugin=============================================================================
    var imageInfo = document.getElementsByClassName("info__bg");
    new simpleParallax(imageInfo);

    var imageStat = document.getElementsByClassName("statistics__img");
    new simpleParallax(imageStat, {
        delay: 9,
        transition: "cubic-bezier(0,0,0,1)",
    });

    // //End parallax plugin===========================================================================

    var mixer = mixitup(".projects__items", {
        animation: {
            duration: 346,
            nudge: true,
            reverseOut: true,
            effects: "fade rotateZ(180deg) stagger(73ms)",
        },
    });
});
