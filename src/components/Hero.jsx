import React from "react";
import LandscapeStudy from "../assets/landscape-study.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
  <div id="hero-section">
    <div className="mask">
      <img className="intro-img" src={LandscapeStudy} alt="landscape-study" />
    </div>
    <div className="content">
      <p>HI, I'M SHIVAM ORAON</p>
      <h1>NodeJS Developer</h1>
      <div>
        <a className="btn" href="#project-section">Project</a>
        <a className="btn btn-light" href="#download">Resume</a>
      </div>
    </div>
  </div>
  );
};

export default Hero;
