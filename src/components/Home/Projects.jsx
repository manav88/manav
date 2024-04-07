import React from "react";
import { PiLinkSimple } from "react-icons/pi";
import { PROJECTS } from "../../statics/data";

const Projects = () => {
  return (
    <section className="projects container-fluid" id="projects">
      <div className="container">
        <header>
          <span className="section-number">(03)</span>
          <h2 className="section-heading">Projects</h2>
        </header>
        <div className="projects-list">
          {PROJECTS.map((project, index) => {
            return (
              <div className="project" key={index + project}>
                <div className="project__header">
                  <p className="project__title">{project.name}</p>
                  <p className="project__subtitle">{project.subtitle}</p>
                  <>
                    {project.link && (
                      <a href={project.link} className="project__link">
                        <span>Link</span>{" "}
                        <span>
                          <PiLinkSimple />
                        </span>
                      </a>
                    )}
                  </>
                </div>
                <div className="project__information">
                  <p className="project__description">{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
