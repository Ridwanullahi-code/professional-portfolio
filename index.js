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
const projectDemo = 'https://ridwanullahi-code.github.io/professional-portfolio/';
const projectLink = 'https://github.com/Ridwanullahi-code/professional-portfolio';

//
const projects = []; // Array for projects information.

// store each project's information into object
for (let i = 0; i < projectTitle.length; i += 1) {
  projects.push({
    Name: projectTitle[i].textContent,
    Image: projectImage[i].src,
    Description: projectDescpt[i].textContent,
    Demo: projectDemo,
    Link: projectLink,
  });
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

    const cardTitle = document.querySelector('.card-title');
    const cardImage = document.querySelector('.card-image');
    const modalButton = document.querySelectorAll('.modal-button');

    cardTitle.innerHTML = projects[i].Name;
    cardImage.src = projects[i].Image;
    modalButton[0].href = projects[i].Demo;
    modalButton[1].href = projects[i].Link;
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
