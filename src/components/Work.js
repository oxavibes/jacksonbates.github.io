import React from 'react';

const Work = (props) => {
  return (
    <div>
      <section id='work'>
        <h1>Work</h1>
        {props.projects.map((project, i) => {
          return (
            <div key={i}>
              <p>{project.name}</p>
              <img src={project.screenshot_url} alt={`${project.name} screenshot`} />
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