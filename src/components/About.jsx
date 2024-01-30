import React from "react";
import ShivamProfile from "../assets/Shivam_Oraon_Profile.png";
import "../styles/About.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="about-heading">About Me</h1>
      <div className="about-body">
        <div className="about-body-content">
          <h2 id="user-detail-name">Shivam Oraon</h2>
          <p id="user-detail-intro">
            Hi there! I'm Shivam Oraon, a full-stack developer based in New Delhi. With strong foundation in both front-end and back-end technologies, I specialize in creating scalable and efficient web applications.
            <br />
            <br />
            My journey in the world of programming started with a fascination for solving real-world problems through code. I hold a degree in Bachelor of Science with Computer Science as my honours. I am proficient in technologies such as JavaScript, React, Node.js, Express, MongoDB, and more.
            <br />
            <br />
            I have successfully delivered number of projects in collaboration as well as individual, showcasing my abilities to turn ideas into robust and user-friendly applications. Whether it's designing responsive user interfaces or implementing complex server-side logic, I am dedicated to delivering high-quality solutions.
            <br />
            <br />
            Let's connect and discuss how my technical expertise and passion for innovation can contribute to your projects and goals!
          </p>
        </div>
        <div className="about-body-profile">
          <img src={ShivamProfile} alt="Shivam-Profile" />
        </div>
      </div>
    </div>
  );
};

export default About;
