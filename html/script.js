// Login Form
const loginForm = document.querySelector(".login__form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert("logged in successfully");
    window.location.href = "index.html"; 
  });
}

//Contact Form
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); 
    alert ("your message has been sent successfully");
    contactForm.reset();
  });
}