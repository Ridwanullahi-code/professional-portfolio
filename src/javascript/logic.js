import projects from './data.js';
import getImages from './images.js';

export default function logic() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show-menu');
  });

  // <=============== Function for the target effect ==============>
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('show-menu');
    });
  });

  // <=============== modal popup information ====================>
  const cardTitle = document.querySelector('.card-title');
  const cardImage = document.querySelector('.card-image');
  const description = document.querySelector('.card-description');
  const modalButton = document.querySelectorAll('.modal-button');

  // get the modal popup initial elements
  const buttons = document.querySelectorAll('.see-project');
  const modal = document.querySelector('.card');
  const closeButton = document.querySelector('.close-button');
  const backdrop = document.querySelector('#backdrop');
  const edu = document.querySelector('.education');
  const popupBarge = document.querySelector('.barge-list');

  // <=============== Function to show modal ======================>
  for (let i = 0; i < projects.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      modal.classList.toggle('active');
      backdrop.classList.toggle('show');
      popupBarge.innerHTML = edu.innerHTML;
      cardTitle.innerHTML = projects[i].name;
      description.innerHTML = projects[i].description;
      cardImage.src = getImages[i];
      modalButton[0].href = projects[i].demo;
      modalButton[1].href = projects[i].link;
    });
  }

  const techList = document.querySelectorAll('.tool-list');

  techList.forEach((tech, index) => {
    tech.innerHTML = projects[index].technologies[index];
  });
  // <=============== Function to close modal ===============>
  closeButton.addEventListener('click', () => {
    modal.classList.remove('active');
    backdrop.classList.remove('show');
  });

  // <=============== Function to close the modal with backdrop =================
  backdrop.addEventListener('click', () => {
    modal.classList.remove('active');
    backdrop.classList.remove('show');
  });

  // <======== form validation ======>
  const form = document.querySelector('.form');
  const email = document.querySelector('form [type=email]');

  const error = document.createElement('p');
  error.innerHTML = 'email must be in lowercase, example(ridwa@gmail.com)';
  error.setAttribute('class', 'error');

  form.addEventListener('submit', (event) => {
    if (email.value === email.value.toLowerCase()) {
      form.send();
    } else {
      event.preventDefault();
      email.parentElement.appendChild(error);
    }
  });

  const Name = document.querySelector('.username');
  const message = document.querySelector('.message');

  const data = { name: Name, email, message };

  // <=============== web storage API ================>
  // <============= store user data from the web =======>

  Object.keys(data).forEach((key) => {
    data[key].addEventListener('change', () => {
      localStorage.setItem(key, data[key].value);
    });
    data[key].value = localStorage.getItem(key);
  });

  // accordion button
  const accordion = document.querySelector('.skills');
  accordion.addEventListener('click', (event) => {
    if (event.target.classList.contains('accordion-btn')) {
      event.target.parentElement.nextElementSibling.classList.toggle('displayer');
      const btn = event.target.parentElement.children[1];
      if (btn.classList.contains('fa-chevron-down')) {
        btn.classList.replace('fa-chevron-down', 'fa-chevron-right');
      } else {
        btn.classList.replace('fa-chevron-right', 'fa-chevron-down');
      }
    }
  });
}