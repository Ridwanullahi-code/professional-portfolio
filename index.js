const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('.bg-change');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show-menu');
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show-menu');
  });
});