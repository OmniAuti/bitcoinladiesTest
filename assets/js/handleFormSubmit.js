// THIS IS FOR CONTACT FORM -------------------------------------------------

var contactForm = document.getElementById("contact-us-form");

var contactUsNameInput = document.querySelector(".name-contact-us-form");
var contactUsEmailInput = document.querySelector(".email-contact-us-form");
var contactUsSubjectInput = document.querySelector(".subject-contact-us-form");
var contactUsTextEnteredInput = document.querySelector(".entered-text-contact-us-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params =   `You have received a contact us submmission from ${contactUsNameInput.value}.\n
                    Their email is ${contactUsEmailInput.value}\n
                    Subject: ${contactUsSubjectInput.value}\n
                    They are writing to say: \n
                    ${contactUsTextEnteredInput.value}`

  request.open("POST", "./forms/contactForm.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
/*
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);*/
});
var contactFormModal = document.getElementById("contact-us-form-modal");

var contactUsNameInputModal = document.querySelector(".name-contact-us-form-modal");
var contactUsEmailInputModal = document.querySelector(".email-contact-us-form-modal");
var contactUsSubjectInputModal = document.querySelector(".subject-contact-us-form-modal");
var contactUsTextEnteredInputModal = document.querySelector(".entered-text-contact-us-form-modal");

contactFormModal.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params =   `You have received a contact us submmission from ${contactUsNameInputModal.value}.\n
                    Their email is ${contactUsEmailInputModal.value}\n
                    Subject: ${contactUsSubjectInputModal.value}\n
                    They are writing to say: \n
                    ${contactUsTextEnteredInputModal.value}`

  request.open("POST", "./forms/contactForm.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
/*
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);*/
});

// THIS IS FOR SUBSCRIBE FORM --------------------------------------------

var subscribeForm = document.getElementById("subscribe-form");
var emailSubscriptionInput = document.querySelector(".email-subscribe");

subscribeForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params = `This subscription is for the email: ${emailSubscriptionInput.value}.`
    
  request.open("POST", "./forms/subscribeForm.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
/*
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);*/
});
// THIS IS FOR SUBSCRIBE FORM FOOTER ------------------------------------------------

var subscribeFormFooter = document.getElementById("subscribe-form-footer");
var emailSubscriptionInputFooter = document.querySelector(".email-subscribe-footer");

subscribeFormFooter.addEventListener("submit", function (e) {
  e.preventDefault();

  var request = new XMLHttpRequest();

  const params = `This new subscription is for the email: ${emailSubscriptionInputFooter.value}.`
    
  request.open("POST", "./forms/subscribeForm.php", true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  request.send(params);
/*
  emailModal.innerHTML = "";
  emailModal.innerHTML = `
<div class="sending-css">
<div class="circle-outter">
  <div class="circle-inner">
    <div class="rect-loading"></div>
  </div>
</div>
</div>`;

  setTimeout(() => {
    emailModal.innerHTML = `
    <p class="fin-close-email-modal">X</p>
    <div class="fin-email-send">
    <p>Thanks for reaching out, ${nameInput.value}.</p>
    <p>I'll respond as soon as I can.</p>
    </div>
    `;
    const closeModal = document.createElement("script");
    closeModal.setAttribute("src", "js/finCloseModal.js");
    closeModal.classList.add("delete-after");
    document.body.append(closeModal);
    document.querySelector(".closeModal").remove();
    document.querySelector(".formSubmitSrc").remove();
  }, 1000);*/
});
