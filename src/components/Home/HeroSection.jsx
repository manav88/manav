import React from "react";
import ManavPhoto from "../../assets/images/manav-hero-min.jpg";

const HeroSection = () => {
  return (
    <section className="hero-section container" id="hero">
      <div className="hero-img-container">
        <div className="hero__img-wrapper">
          <img src={ManavPhoto} alt="Manav" />
        </div>
      </div>
      <div className="hero-text-container">
        <p>
          Part time Poem <span className="emphasize">Writer</span>, Engaged with{" "}
          <span className="emphasize">Economics</span>, Obsessed with{" "}
          <span className="emphasize">Nature</span>, Shuttler by{" "}
          <span className="emphasize">Sports</span> and{" "}
          <span className="emphasize">Engineer</span> By profession.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
