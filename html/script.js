// Wait for the DOM content to fully load
document.addEventListener("DOMContentLoaded", function () {
  // --- LOGIN FORM HANDLING ---
  const loginForm = document.querySelector(".login__form");

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      // Prevent default page reload on submit
      event.preventDefault();

      // Retrieve input values
      const emailInput = loginForm.querySelector('input[type="email"]');
      const passwordInput = loginForm.querySelector('input[type="password"]');
      const rememberMeInput = document.getElementById("user-check");

      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
      const rememberMe = rememberMeInput ? rememberMeInput.checked : false;

      // Basic validation check
      if (email === "" || password === "") {
        alert("Please fill in all required fields.");
        return;
      }

      // Action on success
      alert(
        "Login successful!\nEmail: " + email + "\nRemember Me: " + rememberMe,
      );

      // Reset the form
      loginForm.reset();
    });
  }

  // --- CONTACT FORM HANDLING ---
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevent default page reload on submit
      event.preventDefault();

      // Retrieve input values
      const nameInput = contactForm.querySelector(
        'input[placeholder="Your name"]',
      );
      const emailInput = contactForm.querySelector(
        'input[placeholder="Your email"]',
      );
      const subjectInput = contactForm.querySelector(
        'input[placeholder="Subject"]',
      );
      const messageInput = contactForm.querySelector("textarea");

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      // Basic validation check
      if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please complete all fields before sending.");
        return;
      }

      // Action on success
      alert(
        "Thank you, " + name + "! Your message has been sent successfully.",
      );

      // Reset the form
      contactForm.reset();
    });
  }
});
