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
          <img class ='project-image' src="${getImages[index]}" alt="screenshot of ${project.name} with ${project.description}">
          <div class="projects-describe">
            <h2 class="project-title">${project.name}</h2>
            <div>
              <span class="education"><span class="name">${project.education[0]} </span><i class="fa-sharp fa-solid fa-circle"></i> ${project.education[1]} <i class="fa-sharp fa-solid fa-circle"></i> ${project.education[2]}</span>
            </div>
            <p class="description">${project.description}</p>
            <ul class="tools">
              ${technologies}
            </ul>
          <button type="button" name="read more about project" class="button see-project">See Project</button>
      </div>
    </div>
  `;
  });

  workSection.innerHTML = projectContainer;
}
