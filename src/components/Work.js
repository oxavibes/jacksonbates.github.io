import React from 'react';

const Work = (props) => {
  return (
    <div>
      <section id='work' className='work__section'>
        {props.projects.map((project, i) => {
          return (
            <div key={i} className='project-card'>
              <p>{project.name}</p>
              <img className='project-card__image' src={project.screenshot_url} alt={`${project.name} screenshot`} />
              <p>{project.github_link}</p>
              <p>{project.live_link}</p>              
            </div>
          );
        })}
      </section>
    </div>
  )
}

export default Work;