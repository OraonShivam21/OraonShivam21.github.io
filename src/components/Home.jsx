import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LandscapeStudy from "../assets/landscape-study.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Shivam_Oraon_Resume from "../resume/shivam_oraon_resume.pdf";
import "../styles/Home.css";

const Home = () => {
  const handleDownloadResume = () => {
    window.open(Shivam_Oraon_Resume);

    const a = document.createElement("a");
    a.href = Shivam_Oraon_Resume;
    a.download = "Shivam_Oraon_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const [text] = useTypewriter({
    words: ["A Fullstack Developer", "A MERN Developer", "A Backend Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id="home">
      <div className="mask">
        <img className="intro-img" src={LandscapeStudy} alt="landscape-study" />
      </div>
      <div className="content">
        <h1>HI, I'M SHIVAM ORAON</h1>
        <p className="typewriter">
          {"I'm "}
          {text}{" "}
          <span>
            <Cursor cursorStyle="|"></Cursor>
          </span>{" "}
        </p>
        <div className="content-buttons">
          <a className="btn" href="#projects">
            Projects
          </a>
          <button
            id="resume-button-2"
            className="btn btn-light"
            onClick={handleDownloadResume}
          >
            Resume
          </button>
        </div>
        <div className="home-socials">
          <a href="https://github.com/OraonShivam21" target="_blank" rel="noreferrer">
            <FaGithub size={30} style={{ color: "#fff" }} />
          </a>
          <a href="https://www.linkedin.com/in/shivam-oraon-3b5790284" target="_blank" rel="noreferrer">
            <FaLinkedin
              size={30}
              style={{ color: "#fff" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
