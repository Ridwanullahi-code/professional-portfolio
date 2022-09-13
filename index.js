const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function showMenu(){
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show-menu');
})


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(navLink => {
    navLink.addEventListener('click',function closeMenu(){
        hamburger.classList.remove('active');
        navMenu.classList.remove('show-menu');     
    })
});