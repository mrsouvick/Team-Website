// Typewriter Effect
document.addEventListener("DOMContentLoaded", function() {
  let text = "Welcome to Team Tech Tronics";
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      document.getElementById("welcome-text").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }
  typeWriter();
});

// Toggle Mobile Menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Particle.js Initialization
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ffff" }, /* Cyan */
    shape: { type: "circle" },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0.1 }
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff", /* Cyan */
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    }
  },
  retina_detect: true
});