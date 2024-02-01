import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import "../styles/Contact.css";

const Contact = () => {
  const handleButtonClick = () => {
    const phoneNumber = "8377950302";
    window.location.href = `tel:${phoneNumber}`;
  };
  const emaillink = () => {
    window.location.href = "oraonshivam.0302@gmail.com";
  };

  return (
    <section className="Contact-maindiv" id="contact">
      <div className="heading-div">
          <h1 className="mainheading">
            Contact Me
          </h1>
      </div>

      <div className="contact-cards">
        {/* contact details */}
        <div className="contact-details">
          <div className="details-cards">
            <div className="details-card red" onClick={handleButtonClick}>
              <div>
                <div>
                  <BsFillTelephoneFill className="contact-icon" />
                </div>
                <p id="contact-phone">+91 83779 50302</p>
              </div>
            </div>
            <div className="details-card blue">
              <div>
                <div>
                  <MdLocationOn className="contact-icon" />
                </div>
                <p>Munirka, New Delhi</p>
              </div>
            </div>
            <div
              className="details-card green"
              onClick={emaillink}
              id="contact-email"
            >
              <div>
                <div>
                  <HiMail className="contact-icon" />
                </div>
                <p>oraonshivam.0302@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* contact form */}

        <div className="contact-form-div">
          <div className="contact-card">
            <span className="contact-title">Feel Free To Contact</span>
            <form
              className="contact-form"
              action="https://formsubmit.co/oraonshivam.0302@gmail.com"
              method="POST"
            >
              <div className="contact-group">
                <input placeholder="*" type="text" required="" />
                <label htmlFor="name">Name</label>
              </div>
              <div className="contact-group">
                <input
                  placeholder="*"
                  type="email"
                  id="email"
                  name="email"
                  required=""
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="contact-group">
                <input
                  placeholder="*"
                  type="text"
                  id="subject"
                  name="_subject"
                  required=""
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="contact-group">
                <textarea
                  placeholder="*"
                  id="comment"
                  name="message"
                  rows="5"
                  required=""
                ></textarea>
                <label htmlFor="comment">Message</label>
                <input type="hidden" name="_template" value="box"></input>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
