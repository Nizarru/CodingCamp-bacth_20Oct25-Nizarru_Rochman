// ======================================
// WELCOME SPEECH FUNCTION
// ======================================

// Call welcome speech when page loads
welcomeSpeech();

function welcomeSpeech() {
  // Show prompt to ask for user's name
  let name = prompt("Enter your name:");

  // If user provides a name, greet them
  if (name && name.trim() !== "") {
    document.getElementById("greet-name").innerHTML = `Hi ${name}, `;
  }
}

// ======================================
// FORM VALIDATION FUNCTION
// ======================================

function validateForm() {
  // Get form input values
  const name = document.getElementById("name-input").value.trim();
  const email = document.getElementById("email-input").value.trim();
  const phone = document.getElementById("phone-input").value.trim();
  const message = document.getElementById("message-input").value.trim();

  // Check if all fields are filled
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields are required! Please fill in all the information.");
    return false;
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address!");
    return false;
  }

  // Validate phone number (basic validation - at least 10 digits)
  const phonePattern = /^[0-9+\-\s()]{10,}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid phone number (minimum 10 digits)!");
    return false;
  }

  // If all validations pass, show success message
  alert(
    `Thank you ${name}! Your message has been submitted successfully.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Message: ${message}\n\n` +
      `We will contact you soon!`
  );

  // Optional: Clear the form after successful submission
  document.getElementById("contact-form").reset();

  return true;
}

// ======================================
// SMOOTH SCROLLING FOR NAVIGATION
// ======================================

// Add smooth scrolling to all navigation links
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ======================================
  // HEADER SCROLL EFFECT
  // ======================================

  // Add scrolled class to header when scrolling
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".main-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
