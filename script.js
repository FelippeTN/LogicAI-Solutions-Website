AOS.init();

particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3, random: true },
    color: { value: "#00ffff" },
    line_linked: { enable: true, color: "#00ffff", opacity: 0.4 },
    move: { enable: true, speed: 2, direction: "none", random: true }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const typewriterElement = document.querySelector(".typewriter");
  if (typewriterElement) {
    const words = JSON.parse(typewriterElement.getAttribute("data-words"));
    let i = 0, j = 0, currentWord = "", isDeleting = false;

    function type() {
      currentWord = words[i];
      typewriterElement.textContent = isDeleting 
        ? currentWord.substring(0, j - 1) 
        : currentWord.substring(0, j + 1);
      j = isDeleting ? j - 1 : j + 1;

      if (!isDeleting && j === currentWord.length + 1) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
      }
      setTimeout(type, isDeleting ? 50 : 150);
    }
    type();
  }

  document.querySelectorAll(".counter").forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const speed = 50;
    const updateCount = () => {
      const inc = target / speed;
      if (count < target) {
        count += inc;
        counter.textContent = Math.ceil(count);
        setTimeout(updateCount, 20);
      } else {
        counter.textContent = target;
      }
    };
    updateCount();
  });
});