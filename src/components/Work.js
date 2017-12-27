import React from "react";

const Work = props => {
  return (
    <div>
      <section id="work" className="work__section fadeInUp">
        {props.projects.map((project, i) => {
          return (
            <div key={i} className="project-card">
              <h2 className="project-card__title">{project.name}</h2>
              <img
                className="project-card__image"
                src={project.screenshot_url}
                alt={`${project.name} screenshot`}
              />
              <p>
                <a
                  className="project-card__link"
                  href={`${project.github_link}`}
                >
                  GitHub
                </a>
              </p>
              <p>
                <a className="project-card__link" href={`${project.live_link}`}>
                  Visit
                </a>
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Work;
