import React from "react";
import { WORK_EXPERIENCES } from "../../statics/data";

const WorkExperince = () => {
  return (
    <section className="work-exp" id="workExperience">
      <div className="container">
        <header>
          <span className="section-number">(02)</span>
          <h2 className="section-heading">Work Experinces</h2>
        </header>
        <div className="timeline-container">
          <div className="timeline">
            <ul>
              {WORK_EXPERIENCES.map((exp, index) => {
                return (
                  <li key={exp + index}>
                    <div className="content">
                      <h3>{exp.company}</h3>
                      <p>{exp.role}</p>
                    </div>
                    <div className="time">
                      <h4>{exp.duration}</h4>
                    </div>
                  </li>
                );
              })}

              <div style={{ clear: "both" }}></div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperince;
