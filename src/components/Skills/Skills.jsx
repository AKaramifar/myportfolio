import React from "react";
import "./Skills.scss";

const Skills = ({ componentOffsetTop }) => {
  return (
    <div className="skills-container">
      <div
        id="technical-skills"
        className="technical-container"
        ref={(e) => (componentOffsetTop.current[2] = e)}
      >
        <div className="skills-title-1">
          <p>TECHNICAL SKILLS</p>
        </div>
        <div className="technical">
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-react"></i>
          </a>
          <a
            href="https://redux.js.org/introduction/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./redux.png" alt="Redux"></img>
          </a>
          <a
            href="https://nodejs.org/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./Node.png" alt="Node"></img>
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./mongoDB.png" alt="mongoDB"></img>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-js"></i>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-html5"></i>
          </a>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-css3-alt"></i>
          </a>
          <a
            href="https://sass-lang.com/documentation/syntax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-sass"></i>
          </a>
        </div>
      </div>
      <div
        id="soft-skills"
        className="non-technical"
        ref={(e) => (componentOffsetTop.current[3] = e)}
      >
        <div className="filter">
          <div className="skills-title-2">
            <p>SOFT SKILLS</p>
          </div>
          <div className="non-technical-skill">
            <strong>PROFESSIONAL INTEGRITY AND HONESTY: </strong>
            <p>
              Integrity, uprightness and honest attitude can help the business
              achieve long term goals.
              <br />
              Neither growth, nor profit, nor independence have any real worth
              unless they are won through complete honesty and hard work.
            </p>
            <br />
            <strong>COLLABORATION: </strong>
            <p>
              Collaboration skills enable me to successfully work toward a
              common goal with a team.
              <br />
              They include communicating clearly, actively listening to others,
              taking responsibility and respecting the diversity of my
              colleagues.
            </p>
            <br />
            <strong>COMMUNICATION: </strong>
            <p>
              Effective and transparent communication support me and my teams
              achieve project targets and deadlines.
              <br />
              This is a major step towards better relationships with colleagues
              and building a good teams.
            </p>
            <br />
            <strong>PROBLEM SOLVING:</strong>
            <p>
              Problem solving is at the core of human evolution.
              <br />
              Problem solving is the source of all new inventions, social and
              cultural evolution.
              <br />
              It is the basis for continuous improvement, communication and
              learning.
            </p>
            <br />
            <strong>CREATIVE THINKING: </strong>
            <p>
              Creative thinking might mean devising new ways to carry out tasks,
              solve problems, and meet challenges.
              <br />
              It brings a fresh perspective to any task I do and can also make
              teams and organizations become more productive.
            </p>
            <br />
            <strong>FUN: </strong>
            <p>
              Fun means feeling good. <br />
              Fun is to enjoy being part of a team or a company and feeling
              proud of what one does. <br />
              Fun is feeling a sense of accomplishment being able to take on
              challenges and enjoy the ride!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
