import React from "react";
import { Link } from "react-scroll";
import "./Intro.scss";

const Intro = ({ selectNav }) => {
  return (
    <div id="intro" className="intro">
      <div className="introduce">
        <div>
          <p>Hey!</p>
          <p>I'am Afshin</p>
          <p>Full Stack Developer</p>
          <p>Trine at Code Your Future</p>
          <p>Since Novomber 2019.</p>
          <Link
            className="link-portfolio"
            onClick={() => selectNav("PROJECTS")}
            to="projects"
            offset={0}
            containerId="body"
            smooth={true}
            duration={1000}
          >
            <p>
              LOOK AT MY PORTFOLIO<i className="fas fa-briefcase"></i>{" "}
            </p>
          </Link>
        </div>
      </div>
      <div className="photo-container">
        <div>
          <img src="./Afshin.jpg"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
