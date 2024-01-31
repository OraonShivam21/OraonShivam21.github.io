import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  css3,
  expressjs,
  github,
  html5,
  javascript,
  mongodb,
  netlify,
  nodejs,
  reactjs,
  vercel,
  vscode,
} from "../assets/technical-skills";
import "../styles/Skills.css";

const Skills = () => {
  const username = "OraonShivam21";
  return (
    <div class="skill-stats">
      <div id="skills">
        <h1 className="skills-heading">Technical Skills</h1>
        <div className="technical-skills">
          <div className="skills-card">
            <div className="skills-card-img">
              <img src={html5} alt="html5" />
            </div>
            <p className="skills-card-name">HTML 5</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={css3} alt="css3" />
            <p className="skills-card-name">CSS 3</p>
          </div>
          <div className="skills-card">
            <img
              className="skills-card-img"
              src={javascript}
              alt="javascript"
            />
            <p className="skills-card-name">JavaScript</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={nodejs} alt="nodejs" />
            <p className="skills-card-name">Node.js</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={expressjs} alt="expressjs" />
            <p className="skills-card-name">Express.js</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={mongodb} alt="mongodb" />
            <p className="skills-card-name">MongoDB</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={reactjs} alt="reactjs" />
            <p className="skills-card-name">React</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={github} alt="github" />
            <p className="skills-card-name">Github</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={vscode} alt="vscode" />
            <p className="skills-card-name">VS Code</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={vercel} alt="vercel" />
            <p className="skills-card-name">Vercel</p>
          </div>
          <div className="skills-card">
            <img className="skills-card-img" src={netlify} alt="netlify" />
            <p className="skills-card-name">Netlify</p>
          </div>
        </div>
      </div>
      <div id="stats">
        <h1 className="stats-heading">Git Stats</h1>
        <div className="calendar-container calendar react-activity-calendar">
          <GitHubCalendar className="github-calendar" username={username} />
          {/* <img src="http://ghchart.rshah.org/OraonShivam21" alt="Github chart" /> */}
        </div>
        <div className="github-statistics">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=OraonShivam21&theme=tokyonight"
            alt="github-streak"
          />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=OraonShivam21&layout=compact&theme=tokyonight" alt="top-langs" />
          <img
            src="https://github-readme-stats.vercel.app/api?username=OraonShivam21&show_icons=true&theme=tokyonight"
            alt="github-stats"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
