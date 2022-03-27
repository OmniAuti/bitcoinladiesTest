/**
 * Template Name: Gp - v4.7.0
 * Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    let elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  /**
   * Back to top button
   */
  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /**
   * Mobile nav toggle
   */
  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  /**
   * Mobile nav dropdowns activate
   */
  on(
    "click",
    ".navbar .dropdown > a",
    function (e) {
      if (select("#navbar").classList.contains("navbar-mobile")) {
        e.preventDefault();
        this.nextElementSibling.classList.toggle("dropdown-active");
      }
    },
    true
  );

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.contains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollto(this.hash);
      }
    },
    true
  );

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Clients Slider
   */
  new Swiper(".clients-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 80,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 120,
      },
    },
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener("load", () => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
      });

      let portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");

          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
          portfolioIsotope.on("arrangeComplete", function () {
            AOS.refresh();
          });
        },
        true
      );
    }
  });

  /**
   * Initiate portfolio lightbox
   */
  const portfolioLightbox = GLightbox({
    selector: ".portfolio-lightbox",
  });

  /**
   * Portfolio details slider
   */
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Testimonials slider
   */
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  });

  /**
   * Animation on scroll
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
})();

// SCRIPT FOR PARALLAX BITCOIN DIVIDER

const parallaxBitcoin = document.querySelectorAll(".parallax-bitcoin");
window.addEventListener("scroll", () => {
  let offset = window.pageYOffset;
  parallaxBitcoin.forEach((divider) => {
    divider.style.backgroundPositionY = `${offset * 0.8}px`;
  });
});

/* CAROUSEL FUNCTIONALITY */

const carouselContainer = document.querySelector(".carousel-content-holder");
const carouselSelectors = document.querySelectorAll(".carousel-selector");
// CHANGE SLIDE
const selectorArray = Array.from(carouselSelectors);
carouselSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    clearInterval(carouselIntervalForward);
    clearInterval(carouselIntervalBack);
    addCarouselActiveClass(selector);
    const indexMove = selectorArray.indexOf(selector) * 20;
    carouselContainer.style.transform = `translateX(-${indexMove}%)`;
  });
});

// REMOVE ADD ACTIVE CLASS OF SELECTOR
function addCarouselActiveClass(el) {
  carouselSelectors.forEach((x) => {
    x.classList.remove("active-carousel-selector");
  });
  el.classList.add("active-carousel-selector");
}

// TYPEWRITER FUNCTION
//const typewriterTextContainer = document.querySelector('.typewriter-writer-written-text')
const typewriterText =
  "bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer Bitcoin network without the need for intermediaries. ";
const typewriterTextArray = Array.from(typewriterText);
window.onload = () => {
  let i = 0;
  const typeIt = setInterval(() => {
    document.querySelector(".typewriter-written-text").innerHTML +=
      typewriterTextArray[i];
    i++;
    if (i >= typewriterTextArray.length) {
      clearInterval(typeIt);
      carouselIntervalFunc(); // FUNCTION FOR CAROUSEL STARTS WHEN TYPE WRITER IS DONE
      document.querySelector(".carousel-controls").style.opacity = 1;
    }
  }, 15);
};

// CAROUSEL INTERVAL -----------------------------------------------------------------------------

let carouselIntervalBack; // DECLARED GLOBAL TO BE CLEARED ON CLICK FOR COIN SELECTOR
let carouselIntervalForward; // DECLARED GLOBAL TO BE CLEARED ON CLICK FOR COIN SELECTOR
// INTERVALS NOW RUN BACK AND FORTH THROUGH HERO
function carouselIntervalFunc() {
  let transformAmount = 0;
  let index = 0;
  carouselIntervalForward = setInterval(() => {
    carouselContainer.style.transform = `translateX(-${(transformAmount += 20)}%)`;
    selectorArray[index].classList.remove("active-carousel-selector");
    index++;
    selectorArray[index].classList.add("active-carousel-selector");
    if (index >= 3) {
      clearInterval(carouselIntervalForward)
      carouselIntervalBack = setInterval(() => {
        carouselContainer.style.transform = `translateX(-${(transformAmount -= 20)}%)`;
        selectorArray[index].classList.remove("active-carousel-selector");
        index--;
        selectorArray[index].classList.add("active-carousel-selector");
        if (index == 0) {
          clearInterval(carouselIntervalBack)
          carouselIntervalFunc()
          return
        }
      }, 4000);
      return
    }
  }, 4000);
}


// EVENT CAROUSEL  ------------------------------------------------------------

const eventCarouselCard = document.querySelectorAll(".event-content-card");
const eventCarouselContainer = document.querySelector(
  ".event-carousel-content"
);
const eventCarouselLeftArrow = document.querySelector(
  ".event-carousel-controls-arrow-left"
);
const eventCarouselRightArrow = document.querySelector(
  ".event-carousel-controls-arrow-right"
);

let eventCardWidth = eventCarouselCard.clientWidth;

// WIDTH DIVIDED BY LENGTH OF EVENT CARD TO HANDLE FUTURE LENGTH CHANGE
let eventContainerWidth =
  eventCarouselContainer.clientWidth / eventCarouselContainer.childElementCount;
let eventContainerWidthTotal = eventCarouselContainer.clientWidth;
let windowWidthEventCarouselCheck;

// FOR CONTINOUS CLICK THROUGH
const eventsCardArray = Array.from(
  document.querySelector(".event-carousel-content").children
);
console.log(eventsCardArray);

window.addEventListener("resize", () => {
  eventContainerWidth =
    eventCarouselContainer.clientWidth /
    eventCarouselContainer.childElementCount;
  eventContainerWidthTotal = eventCarouselContainer.clientWidth;
  windowWidthEventCarouselCheck = window.innerWidth;
});

// EVENT CAROUSEL ENDLESS SCROLL FUNCTION --------------------------------------------
(function handleEventCarousel() {
  eventCarouselRightArrow.addEventListener("click", () => {
    const movement = -eventContainerWidth;
    eventCarouselContainer.style.transform = `translateX(${movement}px)`;

    setTimeout(() => {
      const child = eventCarouselContainer.firstElementChild;
      eventCarouselContainer.removeChild(child);
      eventCarouselContainer.append(child);

      eventCarouselContainer.style.transition = null;
      eventCarouselContainer.style.transform = `translateX(0px)`;
      setTimeout(() => {
        eventCarouselContainer.style.transition = "transform ease-in-out 250ms";
      }, 10);
    }, 250);
  });
  eventCarouselLeftArrow.addEventListener("click", () => {
    const movement = -eventContainerWidth;

    eventCarouselContainer.style.transition = null;
    eventCarouselContainer.style.transform = `translateX(0px)`;
    eventCarouselContainer.style.transform = `translateX(${movement}px)`;
    const child = eventCarouselContainer.lastElementChild;
    eventCarouselContainer.removeChild(child);
    eventCarouselContainer.prepend(child);
    setTimeout(() => {
      eventCarouselContainer.style.transition = "transform ease-in-out 250ms";
      eventCarouselContainer.style.transform = `translateX(0px)`;
    }, 10);
  });
})();
