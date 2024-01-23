import React from "react";
import {
  FaPhone,
  FaMailBulk,
  FaMapPin,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="email">
            <h4>
              <a href={`mailto:oraonshivam.0302@gmail.com`}>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginLeft: "2rem" }}
                />
                oraonshivam.0302@gmail.com
              </a>
            </h4>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginLeft: "2rem" }}
              />
              +91 83779 50302
            </h4>
          </div>
          <div className="location">
            <h4>
              <FaMapPin
                size={20}
                style={{ color: "#fff", marginLeft: "2rem" }}
              />
              New Delhi
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            I am Shivam Oraon, a backend developer. I enjoy discussing new
            projects and design challenges.
          </p>
          <div className="socials">
            <a href="https://github.com/OraonShivam21">
              <FaGithub size={30} style={{ color: "#fff" }} />
            </a>
            <a href="https://www.linkedin.com/in/shivam-oraon-3b5790284">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginLeft: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
