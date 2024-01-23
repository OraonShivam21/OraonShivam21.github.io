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
    <nav className={color ? "nav-bg" : ""}>
      <h1>
        <a href="/">Portfolio.</a>
      </h1>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about-section">About</a>
        </li>
        <li>
          <a href="#project-section">Project</a>
        </li>
        <li>
          <a href="#download">Resume</a>
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
