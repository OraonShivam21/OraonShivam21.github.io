import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <a href="/"><h1>Portfolio.</h1></a>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about-section">About</a>
        </li>
        <li>
          <a href="#project-section">Project</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
