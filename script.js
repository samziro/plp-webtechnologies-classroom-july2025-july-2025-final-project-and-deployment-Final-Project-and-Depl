// ===========================
// Responsive Menu Toggle
// ===========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===========================
// Form Validation
// ===========================
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let formMessage = document.getElementById("form-message");

    if (name.length < 3) {
      formMessage.textContent = "Name must be at least 3 characters.";
      formMessage.style.color = "red";
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!email.match(emailPattern)) {
      formMessage.textContent = "Invalid email address.";
      formMessage.style.color = "red";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Message should be at least 10 characters.";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Message sent successfully ";
    formMessage.style.color = "green";
    form.reset();
  });
}
