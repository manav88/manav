import React from "react";
import { PiLinkSimple } from "react-icons/pi";
import { BsQuote } from "react-icons/bs";
import { MY_CREATIONS } from "../../statics/data";

const MyCreations = () => {
  return (
    <section id="myCreations" className="container-fluid">
      <div className="container">
        <header>
          <span className="section-number">(06)</span>
          <h2 className="section-heading">My Creation</h2>
        </header>
        <div className="creation-list">
          {MY_CREATIONS.map((creation, index) => {
            return (
              <div className="creation" key={index + creation}>
                <p className="creation__topic">{creation.topic}</p>
                <p className="creation__title">{creation.title}</p>
                <>
                  <a href={creation.link} className="creation__link">
                    <span>Link </span>
                    <span>
                      <PiLinkSimple />
                    </span>
                  </a>
                </>
                <span className="creation__quote">
                  <BsQuote />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyCreations;
