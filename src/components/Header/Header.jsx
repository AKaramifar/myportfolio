import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = ({ selectedNav, selectNav }) => {
  return (
    <div className="header animate__animated animate__fadeInDown">
      <div className="header-logo">
      <i className="fas fa-chevron-left"></i>
      <i className="fab fa-autoprefixer"></i>
      <i className="fas fa-chevron-right"></i>
      </div>
      <div className="header-navbar">
        <Link
          className={selectedNav === "INTRO" ? "header-nav-selected" : null}
          onClick={() => selectNav("INTRO")}
          to="intro"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>INTRO</p>
        </Link>
        <Link
          className={selectedNav === "ABOUT" ? "header-nav-selected" : null}
          onClick={() => selectNav("ABOUT")}
          to="about"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>ABOUT</p>
        </Link>
        <Link
          className={selectedNav === "TECHNICAL SKILLS" ? "header-nav-selected" : null}
          onClick={() => selectNav("TECHNICAL SKILLS")}
          to="technical-skills"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>TECHNICAL SKILLS</p>
        </Link>
        <Link
          className={selectedNav === "SOFT SKILLS" ? "header-nav-selected" : null}
          onClick={() => selectNav("SOFT SKILLS")}
          to="soft-skills"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>SOFT SKILLS</p>
        </Link>
        <Link
          className={selectedNav === "EDUCATION" ? "header-nav-selected" : null}
          onClick={() => selectNav("EDUCATION")}
          to="education"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>EDUCATION</p>
        </Link>
        <Link
          className={
            selectedNav === "EXPERIENCE" ? "header-nav-selected" : null
          }
          onClick={() => selectNav("EXPERIENCE")}
          to="experience"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>EXPERIENCE</p>
        </Link>
        <Link
          className={selectedNav === "PROJECTS" ? "header-nav-selected" : null}
          onClick={() => selectNav("PROJECTS")}
          to="projects"
          offset={1}
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>PROJECTS</p>
        </Link>
        <Link
          className={selectedNav === "CONTACT" ? "header-nav-selected" : null}
          onClick={() => selectNav("CONTACT")}
          containerId="body"
          to="contact"
          offset={1}
          spy={true}
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>CONTACT</p>
        </Link>
        <i className="fas fa-chevron-left"></i>
      </div>
    </div>
  );
};

export default Header;
