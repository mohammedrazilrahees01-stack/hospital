document.addEventListener("DOMContentLoaded", () => {
  const appointmentForm = document.getElementById("appointmentForm");
  const appointmentMsg = document.getElementById("appointmentMsg");

  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();
      appointmentMsg.textContent =
        "Appointment request submitted successfully.";
      appointmentMsg.style.color = "green";
      appointmentForm.reset();
    });
  }

  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactMsg");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      contactMsg.textContent = "Your message has been sent successfully.";
      contactMsg.style.color = "green";
      contactForm.reset();
    });
  }
});

/* ===============================
   FADE-IN ON SCROLL
================================ */

const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

fadeElements.forEach(el => observer.observe(el));

/* ===============================
   HERO CAROUSEL LOGIC
================================ */
const initCarousel = () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 5000; // 5 seconds per slide

    const nextSlide = () => {
        // Remove active class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to next slide (loop back to 0 at the end)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    };

    // Auto-advance slides
    setInterval(nextSlide, slideInterval);
};

// Initialize the carousel
initCarousel();