import React from "react";
import LeadershipImg from "../../assets/images/leadership-1-min.png";
import { IEEE_SOU_LEADERSHIPS } from "../../statics/data";

const Leadership = () => {
  return (
    <section id="leadership" className="container-fluid">
      <div className="container">
        <header>
          <span className="section-number">(05)</span>
          <h2 className="section-heading">Leadership</h2>
        </header>
        <div className="leadership-wrapper">
          <div className="leadership__img">
            <img loading="lazy" src={LeadershipImg} alt="research" />
          </div>
          <div className="leadership__info">
            <h3 className="leadership__name">IEEE SOU, India</h3>

            {IEEE_SOU_LEADERSHIPS.map((leadership, index) => {
              return (
                <div className="leadership" key={index + leadership.title}>
                  <h5 className="leadership__title">{leadership.title}</h5>
                  <p className="leadership__description">
                    {leadership.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
