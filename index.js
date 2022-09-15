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

const projects = [{
  'name':'Tonic',
  'description':'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  'image':'images/portoflio-card/Snapshoot-Portfolio1.png',
  'technologies':['html','css','javascript','github'],
  'link':'https://ridwanullahi-code.github.io/professional-portfolio/',
  'demo':'https://github.com/Ridwanullahi-code/professional-portfolio'
  },
  {
    'name':'Tonic',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'image':'images/portoflio-card/Snapshoot-Portfolio1.png',
    'technologies':['html','css','javascript','github'],
    'link':'https://ridwanullahi-code.github.io/professional-portfolio/',
    'demo':'https://github.com/Ridwanullahi-code/professional-portfolio'
  },
  {
    'name':'Multi-Post<br>Stories',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'image':'images/portoflio-card/Snapshoot-Portfolio1.png',
    'technologies':['html','css','javascript','github'],
    'link':'https://ridwanullahi-code.github.io/professional-portfolio/',
    'demo':'https://github.com/Ridwanullahi-code/professional-portfolio'
  },

  {
  'name':'Multi-Post<br>Stories',
    'description':'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    'image':'images/portoflio-card/Snapshoot-Portfolio1.png',
    'technologies':['html','css','javascript','github'],
    'link':'https://ridwanullahi-code.github.io/professional-portfolio/',
    'demo':'https://github.com/Ridwanullahi-code/professional-portfolio'
  }
]; 

// <=============== modal popup information ====================>
const projectTitle = document.querySelectorAll('.project-title');
const projectImage = document.querySelectorAll('.project-image');
const projectDescpt = document.querySelectorAll('.description');
const techList = document.querySelectorAll('.tools');


const cardTitle = document.querySelector('.card-title');
const cardImage = document.querySelector('.card-image');
const modalTech = document.querySelector('.tech');
const description = document.querySelector('.card-description');
const modalButton = document.querySelectorAll('.modal-button');


const cards = {
  'description':"MLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with therelea",
  'technologies':['ruby','bootstrap']
 }
 
// store each project's information into object
for (let i = 0; i < projects.length; i += 1) {
  projectTitle[i].innerHTML = projects[i]['name']
  projectImage[i].src = projects[i]['image']
  projectDescpt[i].innerHTML = projects[i]['description'] 
  techList[0].children[i].innerHTML = projects[i]['technologies'][i]
  techList[1].children[i].innerHTML = projects[i]['technologies'][i]
  techList[2].children[i].innerHTML = projects[i]['technologies'][i]
  techList[3].children[i].innerHTML = projects[i]['technologies'][i]
  modalTech.children[i].innerHTML = projects[i]['technologies'][i]
  modalTech.children[4].innerHTML = cards['technologies'][0]
  modalTech.children[5].innerHTML = cards['technologies'][1]
}


console.log(modalTech)
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

