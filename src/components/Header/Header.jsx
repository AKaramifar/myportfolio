import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = ({ selectedNav, selectNav }) => {
  return (
    <div className="header">
      <div className="header-logo">
        <p>
          {" "}
          &#123;&nbsp;<strong>PORTFOLIO</strong>&nbsp;&#125;
        </p>
      </div>
      <div className="header-navbar">
        <Link
          className={selectedNav === "INTRO" ? "header-nav-selected" : null}
          onClick={() => selectNav("INTRO")}
          to="intro"
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
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>ABOUT</p>
        </Link>
        <Link
          className={selectedNav === "SKILLS" ? "header-nav-selected" : null}
          onClick={() => selectNav("SKILLS")}
          to="skills"
          containerId="body"
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>SKILLS</p>
        </Link>
        <Link
          className={selectedNav === "EDUCATION" ? "header-nav-selected" : null}
          onClick={() => selectNav("EDUCATION")}
          to="education"
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
          spy={true}
          smooth={true}
          duration={1000}
        >
          <hr />
          <p>CONTACT</p>
        </Link>
        <i class="fas fa-chevron-left"></i>
      </div>
    </div>
  );
};

export default Header;
