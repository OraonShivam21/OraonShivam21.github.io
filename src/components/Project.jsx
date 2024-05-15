import React from "react";
import TrackerJetApp from "../assets/tracker-jet-app.png";
import WonderWaveTravels from "../assets/wonderwave-travels-project.png";
import EdifyEducationalApp from "../assets/edify-educational-project.png";
import TalentTroveApp from "../assets/talent_trove_home.png";
import "../styles/Project.css";

const Project = () => {
  const talentTroveGit = "https://github.com/OraonShivam21/talent-trove";
  const talentTroveAppLink = "https://talent-trove-app.onrender.com/";
  const trackerJetAppLink = "https://tracker-jet-app.vercel.app/";
  const trackerJetAppGit = "https://github.com/OraonShivam21/tracker-jet-app";
  const WonderWaveAppLink = "https://wonderwave-travels.vercel.app/";
  const WonderWaveGit = "https://github.com/OraonShivam21/wonderwave-travels";
  const EdifyAppLink = "https://edify-educational-app.vercel.app/";
  const EdifyGit = "https://github.com/OraonShivam21/edify-educational-app";

  return (
    <div id="projects">
      <h1 className="projects-heading">My Projects</h1>
      <div className="project-details">
        <div className="project-card">
          <div className="project-img-git-link">
            <img
              className="project-image"
              src={TalentTroveApp}
              alt="edify-educational-app"
            />
            <div className="project-git-dep">
              <a
                href={talentTroveGit}
                className="project-github-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={talentTroveAppLink}
                className="project-deployed-link"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-title-desc-stack">
            <h2 className="project-title">Talent Trove App</h2>
            <p className="project-description">
              Talent Trove is a full-fledged website that supports the user's
              interaction around the pages. The main functionality of this
              website is to showcase the various job offers in different banners
              and page dedicated to each job description. Here recruiters can
              upload their own job descriptions according to their requirements
              and the potential candidates can go through as well.
            </p>
            <h3 className="project-tech-stack">
              React.JS | React-Router | React-Router-DOM | React-Icons |
              React-Spinners | React-Toastify | JSON-Server
            </h3>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img-git-link">
            <img
              className="project-image"
              src={EdifyEducationalApp}
              alt="edify-educational-app"
            />
            <div className="project-git-dep">
              <a
                href={EdifyGit}
                className="project-github-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={EdifyAppLink}
                className="project-deployed-link"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-title-desc-stack">
            <h2 className="project-title">Edify Educational App</h2>
            <p className="project-description">
              Edify Educational App is an online platform where Edify offers
              various courses for users or students who are tech enthusiasts and
              are willing to either learn a new skill in technical field or are
              willing to upskill themselves.
            </p>
            <h3 className="project-tech-stack">HTML5 | CSS3 | JavaScript</h3>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img-git-link">
            <img
              className="project-image"
              src={TrackerJetApp}
              alt="tracker-jet-app"
            />
            <div className="project-git-dep">
              <a
                href={trackerJetAppGit}
                className="project-github-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={trackerJetAppLink}
                className="project-deployed-link"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-title-desc-stack">
            <h2 className="project-title">Tracker Jet App</h2>
            <p className="project-description">
              The Tracker Jet App offers students an all-in-one study tracking
              platform, which helps them with time management while doing their
              assignments. The students can easily interact with all the
              functionalities and improve their time management skills while
              restricting the time for their assignments.
            </p>
            <h3 className="project-tech-stack">
              HTML5 | CSS3 | Bootstrap | JavaScript | Node.js | Express.js |
              MongoDB
            </h3>
          </div>
        </div>
        <div className="project-card">
          <div className="project-img-git-link">
            <img
              className="project-image"
              src={WonderWaveTravels}
              alt="wonderwave-travels"
            />
            <div className="project-git-dep">
              <a
                href={WonderWaveGit}
                className="project-github-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={WonderWaveAppLink}
                className="project-deployed-link"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
          </div>
          <div className="project-title-desc-stack">
            <h2 className="project-title">Wonder Wave Travels</h2>
            <p className="project-description">
              The WonderWave Travels offers the travellers with the best India
              Tour packages, where they can tour almost every part of India with
              the hand-picked packages given in the website.
            </p>
            <h3 className="project-tech-stack">
              HTML5 | CSS3 | Bootstrap | JavaScript | JSON-Server
            </h3>
          </div>
        </div>
        {/* <div className="project-card">
          <div className="project-img-git-link">
            <img className="project-image" src={} alt="" />
            <div className="project-git-dep">
              <a href={} className="project-github-link" target="_blank" rel="noreferrer">GitHub</a>
              <a href={} className="project-deployed-link" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
          <div className="project-title-desc-stack">
            <h2 className="project-title"></h2>
            <p className="project-description"></p>
            <h3 className="project-tech-stack"></h3>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Project;
