import React from "react";
import { Link } from "react-scroll";
import "./LeftNavBar.scss";

const LeftNavBar = ({ selectedNav, selectNav }) => {
  return (
    <div className="left-navbar">
      <div className="left-nav-container">
        <div className="nav-items">
          <Link
            className={
              selectedNav === "INTRO" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("INTRO")}
            to="intro"
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
