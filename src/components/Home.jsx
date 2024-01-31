import React from "react";
import LandscapeStudy from "../assets/landscape-study.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../styles/Home.css";

const Home = () => {
  const handleDownloadResume = () => {
    window.open("https://drive.google.com/file/d/10SF2l87jaZJaF7721jgBaRSclOFfKrVf/view?usp=sharing", "_blank");

    const a = document.createElement("a");
    a.href = "../resume/resume.pdf";
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
  })

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
      </div>
    </div>
  );
};

export default Home;
