import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Shivam_Oraon_Resume from "../resume/shivam_oraon_resume.pdf";
import "../styles/Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) setColor(true);
    else setColor(false);
  };

  window.addEventListener("scroll", changeColor);

  const handleDownloadResume = () => {
    window.open(Shivam_Oraon_Resume);

    const a = document.createElement("a");
    a.href = Shivam_Oraon_Resume;
    a.download = "Shivam_Oraon_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <nav id="nav-menu" className={color ? "nav-bg" : ""}>
      <h1>
        <a href="/">Shivam.</a>
      </h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a className="nav-link home" href="/" onClick={handleClick}>
            Home
          </a>
        </li>
        <li>
          <a className="nav-link about" href="#about" onClick={handleClick}>
            About Me
          </a>
        </li>
        <li>
          <a className="nav-link skills" href="#skills" onClick={handleClick}>
            Skills
          </a>
        </li>
        <li>
          <a
            className="nav-link projects"
            href="#projects"
            onClick={handleClick}
          >
            Projects
          </a>
        </li>
        <li>
          <a className="nav-link contact" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <li>
          <button
            id="resume-button-1"
            className="nav-link resume"
            onClick={handleDownloadResume}
          >
            Resume
          </button>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff", zIndex: "10" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff", zIndex: "10" }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
