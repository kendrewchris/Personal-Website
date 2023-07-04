import React from 'react'
import { projects } from '../constants';

const ProjectCard = ({ project }) => {
  return (
    <div className={`p-6 rounded-[20px] project-card`}>
      <h2 className ='project-title'>{project.title}</h2>
      <img src={project.image} alt={project.title} className ='project-image' />
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading=[24px] mb-1">
        {project.description}
      </p>
      <a href={project.githubURL} target="_blank" class="mt-5">
        <button className = 'project-button'>Code</button>
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className='section-styling'>
      {projects.map((project) => (
          <ProjectCard key = {project.id} project = {project}/>
      ))}
      </div>
    </section>
  )
}

export default Projects