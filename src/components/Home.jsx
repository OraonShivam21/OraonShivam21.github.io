import React from "react";
import LandscapeStudy from "../assets/landscape-study.png";
import "../styles/Home.css";

const Home = () => {
  return (
  <div id="home">
    <div className="mask">
      <img className="intro-img" src={LandscapeStudy} alt="landscape-study" />
    </div>
    <div className="content">
      <p>HI, I'M SHIVAM ORAON</p>
      <h1>NodeJS Developer</h1>
      <div>
        <a className="btn nav-link projects" href="#projects">Projects</a>
        <a className="btn btn-light nav-link resume" href="#download">Resume</a>
      </div>
    </div>
  </div>
  );
};

export default Home;
