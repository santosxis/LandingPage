particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#00f5ff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.3,
      random: false
    },
    size: {
      value: 3,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00f5ff",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      repulse: { distance: 100, duration: 0.4 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});

// ScrollReveal
ScrollReveal({ 
  reset: false,
  distance: '60px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.section-title, .benefit-card, .pill, .cta-section h2, .cta-section p, .hero-button', {
  origin: 'top',
  interval: 100
});

ScrollReveal().reveal('nav', {
  origin: 'top',
  delay: 100
});

ScrollReveal().reveal('footer', {
  origin: 'bottom',
  delay: 400
});

document.querySelector('a[href="#carreira"]').addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("carreira").scrollIntoView({ behavior: "smooth" });
  history.replaceState(null, null, " "); // remove o #carreira da URL
});