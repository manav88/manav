import React from "react";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePageContent from "./components/Home/HomePageContent";

const ReactRouter = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <HomePageContent />
      <Footer />
    </div>
  );
};

export default ReactRouter;
