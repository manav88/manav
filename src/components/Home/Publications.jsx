import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { PUBLICATIONS } from "../../statics/data";

const Publications = () => {
  return (
    <section id="publications" className="container-fluid">
      <div className="container">
        <header>
          <span className="section-number">(04)</span>
          <h2 className="section-heading">Publications</h2>
        </header>
        <div className="publications-list">
          {PUBLICATIONS.map((publication, index) => {
            return (
              <div className="publication" key={index + publication}>
                <div className="publications__img">
                  <img loading="lazy" src={publication.image} alt="research" />
                </div>
                <div className="publication__info">
                  <h3 className="publication__title">{publication.title}</h3>
                  <p className="publication__description">
                    {publication.description}
                  </p>
                  <a href={publication.link} className="publication__link">
                    Published PDF{" "}
                    <span>
                      <HiOutlineExternalLink />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publications;
