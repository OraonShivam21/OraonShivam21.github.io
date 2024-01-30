import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
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

  return (
    <nav id="nav-menu" className={color ? "nav-bg" : ""}>
      <h1>
        <a href="/">Shivam.</a>
      </h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a className="nav-link home" href="/">Home</a>
        </li>
        <li>
          <a className="nav-link about" href="#about">About Me</a>
        </li>
        <li>
          <a className="nav-link skills" href="#skills">Skills</a>
        </li>
        <li>
          <a className="nav-link projects" href="#projects">Projects</a>
        </li>
        <li>
          <a className="nav-link contact" href="#contact">Contact</a>
        </li>
        <li>
          <a className="nav-link resume" href="#download">Resume</a>
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
