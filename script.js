// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 500);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu when link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navbar scroll effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
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

// Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Dynamic typing effect for hero title
const heroTitle = document.querySelector(".hero-title");
const originalText = heroTitle.textContent;
heroTitle.textContent = "";
let index = 0;

function typeWriter() {
  if (index < originalText.length) {
    heroTitle.textContent += originalText.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

setTimeout(typeWriter, 1000);

// Parallax effect for background
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const bgAnimation = document.querySelector(".bg-animation::before");
  const speed = 0.5;

  if (bgAnimation) {
    bgAnimation.style.transform = `translateY(${scrolled * speed}px)`;
  }
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) rotateX(5deg)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) rotateX(0)";
  });
});

// Console Easter Egg
console.log(
  "%c Welcome to my portfolio! 🚀",
  "color: #6366f1; font-size: 20px; font-weight: bold;"
);
console.log(
  "%c Feel free to explore the code!",
  "color: #22c55e; font-size: 14px;"
);
