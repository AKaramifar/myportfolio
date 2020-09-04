import React from "react";
import "./LeftNavBar.scss";

const LeftNavBar = ({ selectedNav, selectNav }) => {
  return (
    <div className="left-navbar">
      <div className="left-nav-container">
        <div className="nav-items">
          <div
            className={
              selectedNav === "INTRO" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("INTRO")}
          ></div>
        </div>
        <div className="nav-items">
          <div
            className={
              selectedNav === "ABOUT" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("ABOUT")}
          ></div>
        </div>
        <div className="nav-items">
          <div
            className={
              selectedNav === "SKILLS" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("SKILLS")}
          ></div>
        </div>
        <div className="nav-items">
          <div
            className={
              selectedNav === "EDUCATION" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("EDUCATION")}
          ></div>
        </div>
        <div className="nav-items">
          <div
            className={
              selectedNav === "EXPERIENCE" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("EXPERIENCE")}
          ></div>
        </div>
        <div className="nav-items">
          <div
            className={
              selectedNav === "PROJECTS" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("PROJECTS")}
          ></div>
        </div>
        <div className="nav-items">
          <div
            className={
              selectedNav === "CONTACT" ? "circle left-nav-selected" : "circle"
            }
            onClick={() => selectNav("CONTACT")}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LeftNavBar;
