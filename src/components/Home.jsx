import React from "react";
import LandscapeStudy from "../assets/landscape-study.png";
import "../styles/Home.css";

const Home = () => {
  const resumePath =
    "https://drive.google.com/file/d/10SF2l87jaZJaF7721jgBaRSclOFfKrVf/view?usp=sharing";

  return (
    <div id="home">
      <div className="mask">
        <img className="intro-img" src={LandscapeStudy} alt="landscape-study" />
      </div>
      <div className="content">
        <h1>HI, I'M SHIVAM ORAON</h1>
        <p>Backend Developer</p>
        <div className="content-buttons">
          <a className="btn" href="#projects">
            Projects
          </a>
          <a
            className="btn btn-light"
            href={resumePath}
            target="_blank"
            rel="noopener noreferrer"
            download="Shivam_Oraon_Resume.pdf"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
