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
              Integrity, uprightness, and honest attitude can helps business in
              achiving long term goles.
              <br /> It also helps with foreseeing future issues and solving
              potential problems.
              <br />
              Neither growth, nor profit, nor independence have any real worth
              unless they are won through complete honesty and hardwork.
            </p>
            <br />
            <strong>COLLABORATION: </strong>
            <p>
              Collaboration skills enable me to successfully work toward a
              common goal with others.
              <br />
              They include communicating clearly, actively listening to others,
              taking responsibility and ownership for issues, and respecting the
              diversity of my colleagues.
            </p>
            <br />
            <strong>COMMUNICATE: </strong>
            <p>
              Effective and transparent communication helps me within a team as
              well as other teams toward achiving project targetS and deadlines.
              <br />
              This is a major step for building a good team, good
              functioning and better teams dynamics.
              <br />
              Employees who look forward to talking with their colleagues are
              more enthused about there work.
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
              It brings a fresh, and sometimes unorthodox, perspective to my
              work.
              <br /> This way of thinking sometimes coupled with collabrations
              with other teams in mind can help departments and organizations
              be more productive.
            </p>
            <br />
            <strong>FUNNY: </strong>
            <p>
              FUN, means feeling good about being part of the company or one’s
              team, feeling proud of what one does, feeling a sense of
              accomplishment in the search for better quality and greater
              efficiency, feeling part of a challenging project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
