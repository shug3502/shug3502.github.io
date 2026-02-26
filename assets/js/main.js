// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  links.classList.toggle('active');
  toggle.classList.toggle('active');
});

// Close mobile menu on link click
links.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    links.classList.remove('active');
    toggle.classList.remove('active');
  });
});

// Scroll-spy: highlight active nav link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }
  });
}, {
  rootMargin: '-40% 0px -55% 0px'
});

sections.forEach(section => observer.observe(section));
