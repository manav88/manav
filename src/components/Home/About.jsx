import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const About = () => {
  return (
    <section className="about container-fluid" id="about">
      <div className="container">
        <header>
          <span className="section-number">(01)</span>
          <h2 className="section-heading">Intro</h2>
        </header>
        <div className="about-text">
          <p>
            I am currently pursuing a Master of Science in Information Systems
            at California State Universitv. Long Beach. Through this program, I
            am gaining in-depth knowledge and practical skills in various
            aspects of information systems, including database management,
            machine learning, statistics and analytics. I am excited to leverage
            this education to contribute meaningfully to the ever-evolving
            field of technology.
          </p>
          {/* <>
            <a
              href="https://drive.google.com/file/d/19kAQ3r3x9QYvm24Jt8C7NkXbykAvJ5kY/view?usp=drivesdk"
              className="resume__link"
            >
              <span>
                Resume <HiOutlineExternalLink />
              </span>
            </a>
          </> */}
        </div>
      </div>
    </section>
  );
};

export default About;
