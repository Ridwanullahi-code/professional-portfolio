export default function animate() {
  // Get all the project cards
  const projectCards = document.querySelectorAll('.no-animate');

  // Create an intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Adjust the threshold value as needed

  // Observe each project card
  projectCards.forEach((card) => {
    observer.observe(card);
  });

  const bar = document.getElementById('myBar');
  function myFunction() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = `${scrolled}%`;
  }
  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunction);
  window.addEventListener('resize', myFunction);

  // <=============== Function to close the modal with escape key ===============>
  const navbar = document.querySelector('.navbar');
  const buttons = document.querySelectorAll('.see-project');
  const close = document.querySelector('.close-button');
  const backdrop = document.querySelector('#backdrop');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      navbar.classList.add('hidden');
      bar.classList.add('hidden');
    });
  });

  close.addEventListener('click', () => {
    navbar.classList.remove('hidden');
    bar.classList.remove('hidden');
  });

  backdrop.addEventListener('click', () => {
    navbar.classList.remove('hidden');
    bar.classList.remove('hidden');
  });
}
