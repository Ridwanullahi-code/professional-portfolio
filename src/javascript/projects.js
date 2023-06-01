import projects from './data.js';
import getImages from './images.js';

export default function createProjects() {
  const workSection = document.querySelector('.work-section');
  let projectContainer = '';
  projects.forEach((project, index) => {
    const technologies = project.technologies
      .map((technology) => `<li>${technology}</li>`)
      .join('');
    projectContainer += `
      <div class="projects no-animate"  >
          <img class ='project-image' src="${getImages[index]}" alt="screenshot of project ${project.name}">
          <div class="projects-describe">
            <h2 class="project-title">${project.name}</h2>
             ${project.education}
            <p class="description">${project.description}</p>
            <ul class="tools">
              ${technologies}
            </ul>
          <a class="button see-project">See Project</a>
      </div>
    </div>
  `;
  });

  workSection.innerHTML = projectContainer;
}
