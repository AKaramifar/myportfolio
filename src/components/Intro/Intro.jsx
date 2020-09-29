import React from "react";
import { Link } from "react-scroll";
import "./Intro.scss";

const Intro = ({ selectNav, componentOffsetTop }) => {
  return (
    <div
      id="intro"
      className="intro animate__animated animate__fadeIn"
      ref={(e) => (componentOffsetTop.current[0] = e)}
    >
      <div className="introduce">
        <div>
          <p>Hi,</p>
          <p>I'm Afshin</p>
          <p>Junior Full Stack Web Developer</p>
          <p>Trainee at Code Your Future</p>
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
          <img src="./Afshin.jpg" alt="Afshin"></img>
        </div>
      </div>
    </div>
  );
};

export default Intro;
