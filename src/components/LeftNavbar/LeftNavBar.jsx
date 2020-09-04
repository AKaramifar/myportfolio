import React from "react";
import { Link } from "react-scroll";
import "./LeftNavBar.scss";

const LeftNavBar = ({ selectedNav, selectNav }) => {
  return (
    <div className="left-navbar animate__animated animate__fadeInUp">
      <div className="left-nav-container">
        <div className="nav-items">
          <Link
            className={
              selectedNav === "INTRO" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("INTRO")}
            to="intro"
            offset={0}
            containerId="body"
            smooth={true}
            duration={1000}
          ></Link>
        </div>
        <div className="nav-items">
          <Link
            className={
              selectedNav === "ABOUT" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("ABOUT")}
            to="about"
            offset={0}
            containerId="body"
            smooth={true}
            duration={1000}
          ></Link>
        </div>
        <div className="nav-items">
          <Link
            className={
              selectedNav === "SKILLS" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("SKILLS")}
            to="skills"
            offset={0}
            containerId="body"
            smooth={true}            
            duration={1000}
          ></Link>
        </div>
        <div className="nav-items">
          <Link
            className={
              selectedNav === "EDUCATION"
                ? "circle left-nav-selected"
                : "circle"
            }
            onClick={() => selectNav("EDUCATION")}
            to="education"
            offset={0}
            containerId="body"
            smooth={true}            
            duration={1000}
          ></Link>
        </div>
        <div className="nav-items">
          <Link
            className={
              selectedNav === "EXPERIENCE"
                ? "circle left-nav-selected"
                : "circle"
            }
            onClick={() => selectNav("EXPERIENCE")}
            to="experience"
            offset={0}
            containerId="body"
            smooth={true}            
            duration={1000}
          ></Link>
        </div>
        <div className="nav-items">
          <Link
            className={
              selectedNav === "PROJECTS" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("PROJECTS")}
            to="projects"
            offset={0}
            containerId="body"
            smooth={true}            
            duration={1000}
          ></Link>
        </div>
        <div className="nav-items">
          <Link
            className={
              selectedNav === "CONTACT" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("CONTACT")}
            to="contact"
            offset={0}
            containerId="body"
            smooth={true}
            duration={1000}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default LeftNavBar;
