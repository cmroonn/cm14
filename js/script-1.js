"use strict";

document.addEventListener("DOMContentLoaded", function () {

  if($('input[name="form_visible[phone]"]').length>0){
    $('input[name="phone"]:not(.pb-sdk-pos-credit__form-control), input[name="lead_phone"], input[name="form_visible[phone]"]').inputmask({ mask: ["+9(999)999-99-99", "9(999)999-99-99", "+99(999)999-99-99", "+999(999)999-99-99", "+9[9][9][9][9][9][9][9][9][9][9][9][9][9][9][9]" ], keepStatic: true });
  }

  try {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".pochet__notebook", {
      scrollTrigger: {
        trigger: ".pochet__notebook",
        scrub: 3,
      },
      top: 300,
      ease: "linear",
      duration: 10,
    });
  } catch (e) {
    console.log(e);
  }

  var popupTimeout = setTimeout(openPopup, 300000, "popupTimer");
  clearTimeout(popupTimeout);
  var isOpenPopup = false;
  var main = document.getElementById("main");

  var overlays = document.querySelectorAll(".overlay");
  overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      var target = e.target;
      if (target.closest(".overlay") && target !== overlay) return;
      closePopup(overlay.id);
    });
  });
  function openPopup(id) {
    if (isOpenPopup) {
      closePopup();
      return;
    }
    var popup = document.getElementById(id);
    popup.classList.add("active");
    main.classList.add("blur");
    isOpenPopup = true;
    document.body.style.overflow = "hidden";
  }
  function closePopup() {
    main.classList.remove("blur");
    document.querySelectorAll(".overlay").forEach(function (popup) {
      popup.classList.remove("active");
      if (popup.querySelector("iframe")) {
        popup
          .querySelector("iframe")
          .contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
      }
    });
    isOpenPopup = false;
    document.body.removeAttribute("style");
  }
  function validate(form) {
    var fields;
    try {
      fields = form.querySelectorAll(".required-field");
    } catch (e) {
      console.log("err");
      return true;
    }
    var arr = [];
    fields.forEach(function (field) {
      if (!field.value || field.value === "") {
        field.classList.add("invalid");
        arr.push(false);
        return;
      }
      field.classList.remove("invalid");
      arr.push(true);
    });
    if (
      arr.find(function (el) {
        return el === false;
      }) === false
    ){
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({'event' : 'form_error'});
      return false;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event' : 'form_submitted'});
    return true;
  }
  document.body.addEventListener("keydown", function (e) {
    if (e.which === 27) {
      closePopup("popupTimer");
      closePopup("popupBasic");
    }
  });
  var buttons = document.querySelectorAll(".open-basic-popup");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPopup("popupBasic");
    });
  });

  try {
    var _buttonsTelegram = document.querySelectorAll(".open-telegram-popup");
    _buttonsTelegram.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupTelegram");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var buttons = document.querySelectorAll(".open-honorboard-popup");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupHonorBoard");
      });
  });
  } catch (e) {
    console.log(e);
  }

  try {
    var _buttonsTelegram = document.querySelectorAll(".open-social-popup");
    _buttonsTelegram.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("guide_social");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttonsTelegram = document.querySelectorAll(".open-freelancer-popup");
    _buttonsTelegram.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("guide_freelancer");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var _buttonsTelegram = document.querySelectorAll(".open-REOM-gift-popup");
    _buttonsTelegram.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupREOM_gift");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttonsTelegram = document.querySelectorAll(".open-REOM-signup-popup");
    _buttonsTelegram.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupREOM_signup");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var _buttons = document.querySelectorAll(".open-signup-popup");
    _buttons.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupSignup");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons2 = document.querySelectorAll(".open-signupclub-popup");
    _buttons2.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupSignupClub");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons3 = document.querySelectorAll(".open-date-popup");
    _buttons3.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupDate");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons4 = document.querySelectorAll(".open-tarifst-popup");
    _buttons4.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupTarifStandard");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons5 = document.querySelectorAll(".open-tarifpro-popup");
    _buttons5.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupTarifPro");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons6 = document.querySelectorAll(".open-tarifpremium-popup");
    _buttons6.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupTarifPremium");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons7 = document.querySelectorAll(".open-credit-popup");
    _buttons7.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupCredit");
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var btn = document.getElementById("scroll-to-tarif");
    btn.addEventListener("click", function () {
      document.querySelector(".tarif").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons8 = document.querySelectorAll(".open-corpclient-popup");
    _buttons8.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupCorpClient");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var _buttonsCM15 = document.querySelectorAll(".open-video-popup");
    _buttonsCM15.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupVideoCM15");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var cookiePlate = document.getElementById("cookie-plate");
    var cookieBtn = document.getElementById("cookieBtn");
    cookieBtn.addEventListener("click", function () {
      cookiePlate.remove();
    });
  } catch (e) {
    console.log(e);
  }

  var forms = document.querySelectorAll(".form-submit");
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!validate(form)) {
        e.preventDefault();
        return;
      }
    });
  });
  try {
    var _buttons9 = document.querySelectorAll(".open-timer-popup");
    _buttons9.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup("popupTimer");
      });
    });
  } catch (e) {
    console.log(e);
  }

  var closePopupButtons = document.querySelectorAll(".popup__close");
  closePopupButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.closest(".overlay");
      closePopup(parent.id);
    });
  });
  try {
    var blocks = document.querySelectorAll(".lessons__lesson__topics__list");
    var toggles = document.querySelectorAll(".lessons__lesson__topics__toggle");
    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var parent = toggle.closest(".lessons__lesson__body__topics");
        var block = parent.querySelector(".lessons__lesson__topics__list");
        if (toggle.innerText === "Свернуть список") {
          toggle.innerText = "Показать все темы урока";
        } else {
          toggle.innerText = "Свернуть список";
        }
        block.classList.toggle("active");
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var swiper = new Swiper(".teachers__swiper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".swiper-button-next-1",
        prevEl: ".swiper-button-prev-1",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        501: {
          slidesPerView: 3,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var $counter = document.querySelector(".video-review__counter");
    var _swiper = new Swiper(".video-reviews__swiper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: ".video-review__next",
        prevEl: ".video-review__prev",
      },
      pagination: {
        el: ".video-review__counter",
        type: "fraction",
        renderFraction: function renderFraction(currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " из " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        },
      },
      breakpoints: {
        501: {
          slidesPerView: 4,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _swiper2 = new Swiper(".reviews__swiper", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        501: {
          slidesPerView: 3,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn = document.getElementById("instrument-btn");
    var block = document.getElementById("instrument-more-content");
    _btn.addEventListener("click", function () {
      block.classList.add("active");
      _btn.style.display = "none";
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn2 = document.querySelector(".program__show-btn");
    var hiddens = document.querySelectorAll(".program__module-hidden");
    _btn2.addEventListener("click", function () {
      hiddens.forEach(function (elem) {
        elem.classList.add("active");
        document.querySelector(".scroll-to-tarif").classList.add("active");
      });
      _btn2.style.display = "none";
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn3 = document.querySelector(".welcome__offer__guide__btn-2");
    _btn3.addEventListener("click", function () {
      document.querySelector(".program").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var dots = document.querySelectorAll(".graphic-dot-1");
    var plates = document.querySelectorAll(".demand__graphic__plate-1");
    dots.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
          }
        });
      });
      if (window.innerWidth >= 500) {
        dot.addEventListener("click", function (e) {
          document.querySelector(".structure").scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _dots = document.querySelectorAll(".graphic-dot-2");
    var _plates = document.querySelectorAll(".demand__graphic__plate-2");
    _dots.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        _plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        _plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
          }
        });
      });
      if (window.innerWidth >= 500) {
        dot.addEventListener("click", function (e) {
          document.querySelector(".structure").scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth",
          });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _dots2 = document.querySelectorAll(".freelance-income__dot");
    var _plates2 = document.querySelectorAll(".freelance-income__plate");

    function scrollTo () {
      document.querySelector(".ways-growup").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth",
      });
    }

    _dots2.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        _plates2.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
            setTimeout(() => dot.addEventListener("click", scrollTo), 500);
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        _plates2.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
            dot.removeEventListener("click", scrollTo);
          }
        });
      });
      if (window.innerWidth >= 500) {
        dot.addEventListener("click", scrollTo);
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons10 = document.querySelectorAll(".faq__buttons button");
    if (window.innerWidth > 500) {
      var _elems = document.querySelectorAll(".faq__text p");
      _buttons10.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _buttons10.forEach(function (btn2) {
            return btn2.classList.remove("active");
          });
          _elems.forEach(function (el) {
            el.classList.remove("active");
            if (btn.dataset.id === el.dataset.id) {
              el.classList.add("active");
              btn.classList.add("active");
            }
          });
        });
      });
    } else {
      var _elems2 = document.querySelectorAll(".faq__buttons__text");
      _elems2.forEach(function (el) {
        el.dataset.height = Number(el.offsetHeight) + 15;
        el.style.height = "0px";
        el.style.padding = "0px";
      });
      _buttons10.forEach(function (btn) {
        if (btn.dataset.id == 1) {
          btn.classList.remove("active");
        }
        btn.addEventListener("click", function () {
          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            _elems2.forEach(function (el) {
              if (btn.dataset.id === el.dataset.id) {
                el.style.height = "0px";
                setTimeout(function () {
                  el.classList.remove("active");
                }, 200);
              }
            });
          } else {
            _buttons10.forEach(function (btn2) {
              return btn2.classList.remove("active");
            });
            _elems2.forEach(function (el) {
              el.style.height = "0px";
              el.classList.remove("active");
              if (btn.dataset.id === el.dataset.id) {
                el.style.height = el.dataset.height + "px";
                el.classList.add("active");
                btn.classList.add("active");
              }
            });
          }
        });
      });
    }
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons11 = document.querySelectorAll(".reviews__btn");
    _buttons11.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("popupReview-".concat(btn.dataset.id));
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    document
      .getElementById("toPrivateClub")
      .addEventListener("click", function () {
        document.querySelector(".promo").scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth",
        });
      });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons12 = document.querySelectorAll(".members__btn");
    _buttons12.forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelector(".start").scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth",
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var slides = document.querySelectorAll(
        ".video-reviews__swiper .swiper-slide"
    );
    slides.forEach(function (el) {
      el.addEventListener("click", function () {
        var vid = el.querySelector("video");
        if (window.innerWidth < 500) {
          if (vid.paused) {
            vid.play();
          } else {
            vid.pause();
          }
        }
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var swiper = new Swiper(".free-events__slider:not(.--cm19__free-events__slider)", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".free-events:not(.--cm19__free-events) .swiper-button-next-2",
        prevEl: ".free-events:not(.--cm19__free-events) .swiper-button-prev-2",
      },
      pagination: {
        el: ".free-events:not(.--cm19__free-events) .swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        501: {
          slidesPerView: 3,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var swiper = new Swiper(".--cm19__free-events .free-events__slider", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: ".--cm19__free-events .swiper-button-next-2",
        prevEl: ".--cm19__free-events .swiper-button-prev-2",
      },
      pagination: {
        el: ".--cm19__free-events .swiper-pagination",
        type: "bullets",
      },
      breakpoints: {
        501: {
          slidesPerView: 2,
        },
      },
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".courses__show-more");
    const accordion = document.querySelector(".courses__content-accordion");

    btn.addEventListener("click", function () {
      accordion.classList.toggle("active");
      if (accordion.classList.contains("active")) {
        btn.innerText = "Скрыть";
      } else {
        btn.innerText = "Показать все курсы";
      }
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".welcome__head__menu__courses");
    const dropdownMenu = document.querySelector(".menu-dropdown-courses");

    btn.addEventListener("click", function () {
      dropdownMenu.classList.toggle("active");
      btn.classList.toggle("active");
    });

    dropdownMenu.addEventListener("mouseleave", function (e) {
      dropdownMenu.classList.remove("active");
      btn.classList.remove("active");
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".welcome__head__menu__point-free");
    const dropdownMenu = document.querySelector(".menu-dropdown-free");

    btn.addEventListener("mouseover", function () {
      dropdownMenu.classList.toggle("active");
    });

    btn.addEventListener("mouseout", function () {
      dropdownMenu.classList.remove("active");
    });

    dropdownMenu.addEventListener("mouseleave", function (e) {
      dropdownMenu.classList.remove("active");
    });

    dropdownMenu.addEventListener("mouseover", function (e) {
      dropdownMenu.classList.add("active");
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".welcome__head__menu__graduates");
    const dropdownMenu = document.querySelector(".menu-dropdown-graduates");

    btn.addEventListener("mouseover", function () {
      dropdownMenu.classList.toggle("active");
    });

    btn.addEventListener("mouseout", function () {
      dropdownMenu.classList.remove("active");
    });

    dropdownMenu.addEventListener("mouseleave", function (e) {
      dropdownMenu.classList.remove("active");
    });

    dropdownMenu.addEventListener("mouseover", function (e) {
      dropdownMenu.classList.add("active");
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const burger = document.querySelector(".welcome__head__burger");
    const menu = document.querySelector(".menu-mobile");
    const closeBtn = document.querySelector(".menu-mobile__close-btn");

    burger.addEventListener("click", function () {
      menu.classList.add("active");
      document.body.classList.add("blocked");
    });

    closeBtn.addEventListener("click", function () {
      menu.classList.remove("active");
      document.body.classList.remove("blocked");
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const mobileDropdown = document.querySelectorAll(".menu-mobile-dropdown");
    const subMenus = document.querySelectorAll(".menu-mobile__nav__submenu");

    subMenus.forEach(function (menu) {
      menu.dataset.height = `${menu.clientHeight}`;
      menu.style.height = "0px";
    });

    mobileDropdown.forEach(function (elem) {
      elem.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = elem.closest("li");
        const menu = parent.querySelector(".menu-mobile__nav__submenu");

        menu.classList.toggle("active");
        elem.classList.toggle("active");

        if (menu.classList.contains("active")) {
          menu.style.height = menu.dataset.height + "px";
        } else {
          menu.style.height = "0px";
        }
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const services = document.querySelectorAll(".services-2__content div");
    const block = document.querySelector(".program");
    services.forEach(function (elem) {
      elem.addEventListener("click", function (e) {
        block.scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth",
        });
      });
    });
  } catch (e) {
    console.log(e);
  }

  if($('input[name="search-field"]').length>0){
    $('input[name="search-field"], form.menu-dropdown__search').on('keyup submit', function (e){
      e.preventDefault();
      let valueSearch = '';
      if($(this).context.nodeName === 'FORM'){
        valueSearch = $(this).find('input[name="search-field"]').val();
      }else{
        valueSearch = $(this).val();
      }
      const links = $(this).parents('.menu-dropdown-courses, .menu-mobile').find('.menu-dropdown-courses__content__left .menu-dropdown-courses__content__link');
      if(valueSearch.length > 2){
        links.show();
        links.each(function(){
          if($(this).html().toUpperCase().indexOf(valueSearch.toUpperCase()) >= 0){
            $(this).show();
          }else{
            $(this).hide();
          }
        });
      }else{
        links.show();
      }
    });
  }

  try {
    var _swiper_best = new Swiper('.best-swiper', {
      slidesPerView: 1,
      centeredSlides: true,
      breakpoints: {
        501: {
          slidesPerView: 4,
          centeredSlides: false
        }
      }
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var _swiper_best = new Swiper('.best-swiper', {
      slidesPerView: 1,
      centeredSlides: true,
      breakpoints: {
        501: {
          slidesPerView: 4,
          centeredSlides: false,
        }
      }
    });
  } catch (e) {
    console.log(e);
  }

  if(!!document.querySelector('.welcome__offer__title-6-extra') && !!document.querySelector('.welcome__offer__title-6-tooltip')){
    document.querySelector('.welcome__offer__title-6-extra').addEventListener('mouseenter', function(){
      document.querySelector('.welcome__offer__title-6-tooltip').classList.add('--active');
    });
    document.querySelector('.welcome__offer__title-6-extra').addEventListener('mouseout', function(){
      document.querySelector('.welcome__offer__title-6-tooltip').classList.remove('--active');
    });
  }

  const observerOptions = {
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('--in-view');
        return;
      }
    });
  }, observerOptions);

  function observerCallback(nodeList){
    if(nodeList.length || !!nodeList){
      nodeList.forEach((element) => observer.observe(element));
    }
  }
  observerCallback(document.querySelectorAll('.pashka.animated.appear'));
  observerCallback(document.querySelectorAll('.pashka.pashka-2'));
  observerCallback(document.querySelectorAll('.reasons-content:first-of-type'));
  observerCallback(document.querySelectorAll('.pashka-6'));

  const observer_halfview = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('--in-view');
        return;
      }
    });
  }, {threshold:0.5});

  const observerDoggos = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('.reasons-content.doggos').classList.add('--in-view');
        return;
      }
    });
  }, {threshold: 0.2});

  const doggos = document.querySelectorAll('.reasons-content.doggos .checkpoint');
  if(doggos.length){
    doggos.forEach((element) => observerDoggos.observe(element));
  }


  const pashka3 = document.querySelectorAll('.pashka-3');
  if(pashka3.length){
    pashka3.forEach((element) => observer_halfview.observe(element));
  }

  const funnelImage2 = document.querySelectorAll('.funnel-2 .funnel-image');
  if(funnelImage2.length){
    funnelImage2.forEach((element) => observer_halfview.observe(element));
  }
  const funnelImage = document.querySelectorAll('.funnel-1 .funnel-image');
  if(funnelImage.length){
    funnelImage.forEach((element) => observer_halfview.observe(element));
  }
  const displayGridElements = document.getElementById('display-grid-elements');
  if(!!displayGridElements){
    displayGridElements.addEventListener('click', function(){
      document.querySelectorAll('.learningprogram .learningprogram-grid .hidden').forEach(function(element){
        element.classList.remove('hidden');
      });
      this.style.display = 'none';
      if(!!document.querySelector('.learningprogram a.cta-button')){
        document.querySelector('.learningprogram a.cta-button').classList.remove('hidden');
      }
    });
  }

  const basisControlLines = document.querySelectorAll('.basis .checkpoint');
  if(basisControlLines.length){
    const basisSection = document.querySelector('section.basis');
    basisControlLines.forEach(function(element){
      new IntersectionObserver(function(entries){
            const [entry] = entries;
            const currentControlNumber = element.dataset.controlNumber;
            const appearNumber = element.dataset.appearNumber;
            if(entry.isIntersecting){
              if(currentControlNumber == 1){
                basisSection.classList.add('--in-view');
              } else if(currentControlNumber == 0){
                basisSection.classList.remove('--in-view');
              }
              if(appearNumber == 0){
                basisSection.classList.add('--full');
              } else if(appearNumber == 1){
                basisSection.classList.remove('--full');
              }
            }
          },
          {
            root: null,
          }).observe(element);
    });
  }

  const controlLines = document.querySelectorAll('.funnel-1 .checkpoint');
  if(controlLines.length){
    const funnelMessages = document.querySelectorAll('.funnel-1 .message-container');
    const theFunnel = document.querySelector('.funnel-1 .funnel-svg');
    const funnelSections = document.querySelectorAll('.funnel-1 .funnel-body').length;
    controlLines.forEach(function(element){
      new IntersectionObserver(function(entries){
            const [entry] = entries;
            const currentControlNumber = element.dataset.controlNumber;
            if(entry.isIntersecting){
              funnelMessages[currentControlNumber].classList.add('current');
              if(currentControlNumber == controlLines.length-1){
                document.querySelector('.funnel-1 .cta-button').classList.add('--visible');
              } else{
                document.querySelector('.funnel-1 .cta-button').classList.remove('--visible');
              }
              funnelMessages.forEach(function(element, index){
                if(index > currentControlNumber){
                  element.classList.remove('current');
                  element.classList.remove('passed');
                }
                if(index < currentControlNumber){
                  element.classList.remove('current');
                  element.classList.add('passed');
                }

              });
              if(currentControlNumber > 0){
                if(!theFunnel.classList.contains('--visible')){
                  theFunnel.classList.add('--visible');
                }
              } else{
                if(theFunnel.classList.contains('--visible')){
                  theFunnel.classList.remove('--visible');
                }
              }
              for(let i = 0; i < controlLines.length-1; i++){
                if(currentControlNumber == i+1){
                  if(i<=funnelSections){
                    theFunnel.classList.add('--step-'+i);
                  }
                } else{
                  if(i<=funnelSections){
                    theFunnel.classList.remove('--step-'+i);
                  }
                }
              }
            }
          },
          {
            root: null,
          }).observe(element);
    });
  }

  const controlLines2 = document.querySelectorAll('.funnel-2 .checkpoint');
  if(controlLines2.length){
    const funnelMessages2 = document.querySelectorAll('.funnel-2 .message-container');
    const theFunnel2 = document.querySelector('.funnel-2 .funnel-svg');
    const funnelSections2 = document.querySelectorAll('.funnel-2 .funnel-body').length;
    controlLines2.forEach(function(element){
      new IntersectionObserver(function(entries){
            const [entry] = entries;
            const currentControlNumber = element.dataset.controlNumber;
            if(entry.isIntersecting){
              funnelMessages2[currentControlNumber].classList.add('current');
              if(currentControlNumber == controlLines2.length-1){
                document.querySelector('.funnel-2 .cta-button').classList.add('--visible');
              } else{
                document.querySelector('.funnel-2 .cta-button').classList.remove('--visible');
              }
              funnelMessages2.forEach(function(element, index){
                if(index > currentControlNumber){
                  element.classList.remove('current');
                  element.classList.remove('passed');
                }
                if(index < currentControlNumber){
                  element.classList.remove('current');
                  element.classList.add('passed');
                }
              });
              if(currentControlNumber > 0){
                if(!theFunnel2.classList.contains('--visible')){
                  theFunnel2.classList.add('--visible');
                }
              } else{
                if(theFunnel2.classList.contains('--visible')){
                  theFunnel2.classList.remove('--visible');
                }
              }
              for(let i = 0; i < controlLines2.length; i++){
                if(currentControlNumber == i){
                  if(i<=funnelSections2){
                    theFunnel2.classList.add('--step-'+i);
                  }
                } else{
                  if(i<=funnelSections2){
                    theFunnel2.classList.remove('--step-'+i);
                  }
                }
              }
            }
          },
          {
            root: null,
          }).observe(element);
    });
  }

  const controlLines3 = document.querySelectorAll('.simplify .checkpoint');
  if(controlLines3.length){
    const antonMessages = document.querySelectorAll('.simplify .message-container');
    const ducttapes = document.querySelectorAll('.simplify .tail-ducttape-mobile')
    controlLines3.forEach(function(element){
      new IntersectionObserver(function(entries){
            const [entry] = entries;
            const currentControlNumber = element.dataset.controlNumber;
            if(entry.isIntersecting){
              antonMessages[currentControlNumber].classList.add('current');
              ducttapes[currentControlNumber].classList.add('current');
              if(currentControlNumber == controlLines3.length-1){
                document.querySelector('.simplify .cta-button').classList.add('--visible');
              } else{
                document.querySelector('.simplify .cta-button').classList.remove('--visible');
              }
              ducttapes.forEach(function(element, index){
                if(index > currentControlNumber){
                  element.classList.remove('current');
                  element.classList.remove('passed');
                }
                if(index < currentControlNumber){
                  element.classList.remove('current');
                  element.classList.add('passed');
                }
              });
              antonMessages.forEach(function(element, index){
                if(index > currentControlNumber){
                  element.classList.remove('current');
                  element.classList.remove('passed');
                }
                if(index < currentControlNumber){
                  element.classList.remove('current');
                  element.classList.add('passed');
                }
              });
            }
          },
          {
            root: null,
          }).observe(element);
    });
  }

  if(document.querySelectorAll('.funnel').length){
    document.querySelectorAll('.funnel-1-4').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-1-checkpoint-5').scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
      });
    });
    document.querySelectorAll('.funnel-1-3').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-1-checkpoint-4').scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
      });
    });
    document.querySelectorAll('.funnel-1-2').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-1-checkpoint-3').scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
      });
    });
    document.querySelectorAll('.funnel-1-1').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-1-checkpoint-2').scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" })
      });
    });

    document.querySelectorAll('.funnel-2-4').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-2-checkpoint-4').scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
      });
    });
    document.querySelectorAll('.funnel-2-3').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-2-checkpoint-3').scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
      });
    });
    document.querySelectorAll('.funnel-2-2').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-2-checkpoint-2').scrollIntoView({ behavior: "auto", block: "end", inline: "nearest" })
      });
    });
    document.querySelectorAll('.funnel-2-1').forEach(function(element){
      element.addEventListener('click', function(){
        document.getElementById('funnel-2-checkpoint-1').scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" })
      });
    });
  }
  if (window.innerWidth <= 500 && !!document.getElementsByClassName('basis-image')[0]) {
    document.getElementsByClassName('basis-image')[0].addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPopup("popupTelegram");
    });
  }

  if(window.innerWidth <= 500 && !!document.getElementsByClassName('cm15-tooltips')[0]){
    document.querySelectorAll('.cm15-tooltips').forEach(function(element){
      element.addEventListener('click', function(){
        if(this.classList.contains('--active')){
          this.classList.remove('--active');
          this.classList.remove('open-REOM-signup-popup');
        } else{
          this.classList.add('--active');
          this.classList.add('open-REOM-signup-popup');
        }
      });
    });
  }

  if(window.innerWidth > 500 && !!document.getElementsByClassName('cm15-tooltips')[0]){
    document.querySelectorAll('.cm15-tooltips').forEach(function(element){
      element.addEventListener('mouseenter', function(){
        if(!this.classList.contains('open-REOM-signup-popup')){
          this.classList.add('open-REOM-signup-popup');
        }
      });
    })
  }

  if(!!document.querySelector('.cm15__clients')){
    if(window.jQuery){
      $('#toggle_clients').on('click', function(){
        $('.cm15__clients-image.toggleable').fadeIn(400).removeClass('hidden');
        $(this).css('display', 'none');
      });
    } else{
      let clientsToggle = true;
      document.getElementById('toggle_clients').addEventListener('click', function(){
        clientsToggle = !clientsToggle;
        document.querySelectorAll('.cm15__clients-image.toggleable').forEach(function(element){
          element.classList.toggle('hidden', clientsToggle);
        });
        this.style.display = 'none';
      })
    }
  }

  if(!!document.querySelector('.cm15__anton-cta-button')){
    document.querySelectorAll('.cm15__anton-cta-button').forEach(function(element){
      element.addEventListener('click', function(e){
        if(e.target.dataset.timing == 15){
          document.getElementById('reom-signup-time-15').checked = true;
        }
        if(e.target.dataset.timing == 20){
          document.getElementById('reom-signup-time-20').checked = true;
        }
      });
    });
  }


  const swiper_smm = new Swiper(".cm-general__pages-slider", {
    speed: 400,
    slidesPerView: 1,
    grabCursor: true,
    centeredSlides: true,
    navigation: {
      prevEl: ".cm-general__pages-slider__button.slider-button-prev, .cm-general__pages-slider__button-area.slider-button-area-prev",
      nextEl: ".cm-general__pages-slider__button.slider-button-next, .cm-general__pages-slider__button-area.slider-button-area-next",
    },
    breakpoints: {
      501: {
        slidesPerView: 2,
        centeredSlides: false,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: false
    },
  });
  const swiper_smm_slides = swiper_smm.slides.length;
  swiper_smm.on('activeIndexChange', function(){
    if(this.activeIndex >= swiper_smm_slides-3){
      if(!$('.cm-general__pages-slides').hasClass('active')){
        setTimeout(function(){
          $('.cm-general__pages-slider__overlay').fadeIn();
          $('.cm-general__pages-slides').addClass('active');
          $('.cm-general__pages-slide-inner').addClass('blurred-10');
        }, 500)
      }
    } else{
      $('.cm-general__pages-slider__overlay').fadeOut();
      $('.cm-general__pages-slides').removeClass('active');
      $('.cm-general__pages-slide-inner').removeClass('blurred-10');
    }
  });

  if(!!document.querySelector('.cm19-scripts')){
    const sliderEvents = new Swiper(".--cm-general__slider-events .cm-general__slider-wrapper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        prevEl: ".--cm-general__slider-events .--cm-general__slider-button-prev",
        nextEl: ".--cm-general__slider-events .--cm-general__slider-button-next",
      },
      pagination: {
        el: ".--cm-general__slider-events .cm-general__slider-pagination",
        type: "bullets",
      },
      breakpoints: {
        501: {
          centerInsufficientSlides: true,
          slidesPerView: 3,
        },
      },
    });
    const sliderExperts = new Swiper(".--cm-general__slider-experts .cm-general__slider-wrapper", {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        prevEl: ".--cm-general__slider-experts .--cm-general__slider-button-prev",
        nextEl: ".--cm-general__slider-experts .--cm-general__slider-button-next",
      },
      pagination: {
        el: ".--cm-general__slider-experts .cm-general__slider-pagination",
        type: "bullets",
      },
      breakpoints: {
        501: {
          centerInsufficientSlides: true,
          slidesPerView: 2,
        },
      },
    });

    const sliderDates = new Swiper(".cm19__dates-slider", {
      speed: 400,
      slidesPerView: 1,
      centeredSlides: true,
      navigation: {
        prevEl: ".--cm19__dates-button-prev",
        nextEl: ".--cm19__dates-button-next",
      },
    });
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const monthsTense = ["Январе", "Феврале", "Марте", "Апреле", "Мае", "Июне", "Июле", "Августе", "Сентябре", "Октябре", "Ноябре", "Декабре"];
    const monthsVal = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    sliderDates.on('slideChange', function(){
      $('.cm19__dates .cm19__section-title > span').text(monthsTense[sliderDates.activeIndex]);
      if((!sliderDates.isEnd || !sliderDates.isBeginning)){
        if($('.cm19__dates .cm19__calendar-button').hasClass('hidden')){
          $('.cm19__dates .cm19__calendar-button').removeClass('hidden');
        }
        $('.--cm19__dates-button-prev > span').text(months[sliderDates.activeIndex-1]);
        $('.--cm19__dates-button-next > span').text(months[sliderDates.activeIndex+1]);
        sliderDates.once('slideNextTransitionStart', function(){
          $('.cm19__dates-slide-message > p > span').text(months[sliderDates.activeIndex]);
        })
      }
      if(sliderDates.isBeginning){
        $('.--cm19__dates-button-prev').addClass('hidden');
        $('.--cm19__dates-button-next > span').text(months[sliderDates.activeIndex+1]);
      }
      if(sliderDates.isEnd){
        $('.--cm19__dates-button-next').addClass('hidden');
        $('.--cm19__dates-button-prev > span').text(months[sliderDates.activeIndex-1]);
        sliderDates.once('slidePrevTransitionEnd', function(){
          $('.cm19__dates-slide-message > p > span').text(months[sliderDates.activeIndex]);
        })
      }
    });

    // $('.cm19__calendar-year:first-child').prop('checked', true);
    // $('.cm19__calendar-month:first-child').prop('checked', true);
    // $('.cm19__dates .cm19__section-title > span').text(monthsTense[0]);

    let selectedYear = parseInt($('.cm19__calendar-year:first-child').val());
    let selectedMonth = $('.cm19__calendar-month:first-child').val();

    function slidesDisplayEmpty(visible, limit, sliderElement, sliderIndex){
      if(visible < limit){
        let emptySlidesToShow = limit-visible;
        for(let i = 0; i < emptySlidesToShow; i++){
          $('.empty-slide-'+sliderIndex).eq(i).removeClass('hidden');
          sliderElement.update();
        }
      } else{
        $('.empty-slide').addClass('hidden');
        sliderElement.update();
      }
    }

    function slidesDisplaySwitch(slidersArray, processEmpty){
      slidersArray.forEach(function(slidersArrayElement, slidersArrayIndex){
        if(processEmpty){
          let visibleCount = 0;
          $(slidersArrayElement.slides).each(function(_, element){
            if($(element).data('month') == selectedMonth && $(element).data('year') == selectedYear){
              $(element).removeClass('hidden');
              visibleCount++;
            } else{
              $(element).addClass('hidden');
            }
            slidersArrayElement.update();
          });
          switch(slidersArrayIndex){
            case 0:
              slidesDisplayEmpty(visibleCount, 3, slidersArrayElement, slidersArrayIndex);
              break;
            case 1:
              slidesDisplayEmpty(visibleCount, 2, slidersArrayElement, slidersArrayIndex);
              break;
          }
        } else{
          $(slidersArrayElement.slides).each(function(_, element){
            if($(element).data('year') == selectedYear){
              $(element).removeClass('hidden');
            } else{
              $(element).addClass('hidden');
            }
            slidersArrayElement.update();
          });
        }
      });
    }
    slidesDisplaySwitch([sliderEvents, sliderExperts], true);
    slidesDisplaySwitch([sliderDates], false);
    function updatePageTitle(month, year){
      if(month || year){
        if(month){
          $('.cm19__calendar-current-selection span:first-child').text(month);
        }
        if(year){
          $('.cm19__calendar-current-selection span:last-child').text(year);
        }
      }
    }
    // updatePageTitle();
    $('.cm19__calendar').on('input', '.cm19__calendar-month, .cm19__calendar-year', function(event){
      switch($(event.target).attr('name')){
        case 'calendar-year':
          selectedYear = parseInt($(event.target).val());
          $('.cm19__calendar-month:first-child').prop('checked', true);
          $('.cm19__dates .cm19__section-title > span').text(monthsTense[0]);
          sliderDates.update();
          sliderDates.slideTo(0);
          updatePageTitle(false, selectedYear);
          updatePageTitle(months[0], false);
          break;
        case 'calendar-month':
          selectedMonth = $(event.target).val();
          let selectedMonthIndex = $(event.target).index()/2;
          sliderDates.update();
          sliderDates.slideTo(selectedMonthIndex);
          updatePageTitle(months[selectedMonthIndex], false);
          break;
      }
      slidesDisplaySwitch([sliderEvents, sliderExperts], true);
      slidesDisplaySwitch([sliderDates], false);
    });
    function setCurrentDate(){
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      $('.cm19__calendar-year[value="'+currentYear+'"]').prop('checked', true).trigger('input');
      $('.cm19__calendar-month[value="'+monthsVal[currentMonth]+'"]').prop('checked', true).trigger('input');
    }
    setCurrentDate();
  }
  $('.video-reviews').on('click', '.video-reviews__swiper .swiper-slide', function(event){
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({'event' : 'klik_otziv'});
  });

  try {
    const btns = document.querySelectorAll(".video-reviews__btn");
    const sliders = document.querySelectorAll(".video-reviews__swiper");

    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        const btnId = btn.dataset.id;
        btns.forEach(btn => btn.classList.remove('active'));

        sliders.forEach(function(slider) {
          slider.classList.remove("active");
          if (btnId === slider.dataset.id) {
            slider.classList.add('active');
            btn.classList.add('active');
          }
        });

      });
    })
  } catch(e) {
    console.log(e);
  }

  try {
    const btns = document.querySelectorAll(".open-review-popup");
    btns.forEach(function(btn) {
      btn.addEventListener("click", function () {
        let id = btn.dataset.id;
        openPopup(`popupStudentResult-${id}`);
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".categories__btn");
    const cards = document.querySelectorAll(".categories__item.mob-hidden");
    btn.addEventListener("click", function () {
      cards.forEach(function(card) {
        card.classList.remove("mob-hidden");
      });
      btn.remove();
    });
  } catch (e) {
    console.log(e);
  }
});
