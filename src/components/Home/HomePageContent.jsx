import React from "react";
import HeroSection from "./HeroSection";
import WorkExperince from "./WorkExperince";
import About from "./About";
import Projects from "./Projects";
import Publications from "./Publications";
import Leadership from "./Leadership";
import MyCreations from "./MyCreations";

const HomePageContent = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WorkExperince />
      <Projects />
      <Publications />
      <Leadership />
      <MyCreations />
    </>
  );
};

export default HomePageContent;
