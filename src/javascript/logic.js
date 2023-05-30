import { projects, cards } from './data.js';

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

  const projectTitle = document.querySelectorAll('.project-title');
  const projectImage = document.querySelectorAll('.project-image');
  const projectDescpt = document.querySelectorAll('.description');

  const cardTitle = document.querySelector('.card-title');
  const cardImage = document.querySelector('.card-image');
  const description = document.querySelector('.card-description');
  const modalButton = document.querySelectorAll('.modal-button');

  // store each project's information into object
  for (let i = 0; i < projects.length; i += 1) {
    projectTitle[i].innerHTML = projects[i].name;
    projectImage[i].src = projects[i].image;
    projectDescpt[i].innerHTML = projects[i].description;
  }

  // get the modal popup initial elements
  const buttons = document.querySelectorAll('.see-project-btn');
  const modal = document.querySelector('.card');
  const closeButton = document.querySelector('.close-button');
  const backdrop = document.querySelector('#backdrop');

  // <=============== Function to show modal ======================>
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', () => {
      modal.classList.toggle('active');
      backdrop.classList.toggle('show');
      cardTitle.innerHTML = projects[i].name;
      description.innerHTML = cards.description;
      cardImage.src = projects[i].image;
      modalButton[0].href = projects[i].demo;
      modalButton[1].href = projects[i].link;
    });
  }
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
}
