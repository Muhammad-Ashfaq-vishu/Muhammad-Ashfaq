document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".hamburger");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  // Close menu when clicking a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.style.background = "rgba(31, 31, 31, 0.98)";
      navbar.style.padding = "0.8rem 3rem";
    } else {
      navbar.style.background = "rgb(31, 31, 31)";
      navbar.style.padding = "1.2rem 3rem";
    }
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero animations
  gsap.from(".hero-name", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
  });

  gsap.from(".hero-title, .hero-tagline", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.4,
    stagger: 0.2,
  });

  // About section animations
  gsap.from(".about-content", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top center",
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    y: 50,
    duration: 1,
  });

  // Skill items animation
  gsap.from(".skill-items span", {
    scrollTrigger: {
      trigger: ".skill-items",
      start: "top center",
    },
    opacity: 0,
    y: 20,
    duration: 0.5,
    stagger: 0.1,
  });

  // Services and Portfolio animations
  gsap.from(".service-card", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".services-grid",
      start: "top center",
    },
  });

  gsap.from(".portfolio-item", {
    opacity: 0,
    scale: 0.8,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".portfolio-grid",
      start: "top center",
    },
  });
});

// Contact form handling
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Thank you for your message! I will get back to you soon.");
    contactForm.reset();
  });
}

// Scroll to top functionality
const scrollTop = document.querySelector(".scroll-top");
if (scrollTop) {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
      scrollTop.classList.add("visible");
    } else {
      scrollTop.classList.remove("visible");
    }
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Add contact section animations
gsap.from(".contact-item", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top center",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
  stagger: 0.2,
});

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top center",
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
});
