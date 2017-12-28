import React from "react";

const Work = props => {
  return (
    <div>
      <section id="work" className="work__section fadeInUp">
        {props.projects.map((project, i) => {
          return (
            <div key={i} className="project-card">
              <img
                className="project-card__image"
                src={project.screenshot_url}
                alt={`${project.name} screenshot`}
              />
              <h2 className="project-card__title">{project.name}</h2>
              <p className="project-card__links">
                <a
                  className="project-card__link"
                  href={`${project.github_link}`}
                >
                  GitHub
                </a>
                {project.live_link !== "" ? (
                  <span>
                    &nbsp; | &nbsp;
                    <a
                      className="project-card__link"
                      href={`${project.live_link}`}
                    >
                      Web
                    </a>
                  </span>
                ) : null}
              </p>
              <p className="project-card__details">{project.details_text}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Work;
