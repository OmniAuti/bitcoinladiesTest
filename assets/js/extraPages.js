let selectHeader = document.getElementById("header");
if (selectHeader) {
  const headerScrolled = () => {
    if (window.scrollY > 100) {
      selectHeader.classList.add("header-scrolled");
    } else {
      selectHeader.classList.remove("header-scrolled");
    }
  };
  window.addEventListener("load", headerScrolled);
  window.addEventListener('scroll', headerScrolled);
}

const preloader = document.getElementById("preloader");

  window.addEventListener("load", () => {
    preloader.remove();
  });

  /*MOBILE NAV FUNCTION ------------------------------------------------*/
  let navbarlinks = document.querySelectorAll(".scrollto");
  const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = document.querySelector('navbarlink.hash');
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
window.addEventListener('scroll', navbarlinksActive);


/**
 * Mobile nav toggle
 */
 document.querySelector(".mobile-nav-toggle",).addEventListener("click",  function (e) {
  document.getElementById("navbar").classList.toggle("navbar-mobile");
  this.classList.toggle("bi-list");
  this.classList.toggle("bi-x");
});

/**
 * Mobile nav dropdowns activate
 */
document.querySelectorAll(".navbar .dropdown > a").forEach(link => link.addEventListener(
  "click",
  function (e) {
    if (document.getElementById("navbar").classList.contains("navbar-mobile")) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle("dropdown-active");
    }
  })
);


// CONTACT MODAL -----------------------------------------------------------------------------

const contactModal = document.querySelector('.contact-modal')
const contactModalCloseBtn = document.querySelector('.modal-close-btn')
const contactLink = document.getElementById('contact-nav-link')

contactLink.addEventListener('click', (e) => {
  e.preventDefault()
  contactModal.classList.add('active-contact-modal');
  document.body.style.overflow = 'hidden';
})

contactModalCloseBtn.addEventListener('click', () => {
  contactModal.classList.remove('active-contact-modal');
  document.body.style.overflow = null;
})