import { projects } from './data.js';

const workSection = document.querySelector('.work-section');

let projectContainer = '';
projects.forEach((project) => {
  projectContainer += `
      <div class="projects project1">
          <img class ='project-image' src="${project.image}" alt="screenshot of project one">
          <div class="projects-describe">
            <h2 class="project-title">${project.name}</h2>
            <p class="description">${project.description}</p>
            <ul class="tools">
                <li>${project.technologies[0]}</li>
                <li>${project.technologies[1]}</li>
                <li>${project.technologies[2]}</li>
                <li>${project.technologies[3]}</li>
            </ul>
          <a class="button see-project-btn">See Project</a>
      </div>
    </div>
  `;
});

workSection.innerHTML = projectContainer;