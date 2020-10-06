import React from "react";
import "./Experience.scss";

const Experience = ({ componentOffsetTop }) => {
  return (
    <div
      id="experience"
      className="experience"
      ref={(e) => (componentOffsetTop.current[5] = e)}
    >
      <h1>EXPERIENCE</h1>
      <div className="experience-container">
        <div className="ex-circle-date-one"></div>
        <div className="ex-part-one">
          <i className="ex-cap fas fa-briefcase"></i>
          <p>TECHNICAL SUPPORT ENGINEER</p>
          <p>Biston Telecom Company</p>
          <p>IRAN - KERMANSHAH</p>
          <p>Full Time</p>
        </div>
        <div className="ex-circle-date-two"></div>
        <div className="ex-part-two">
          <i className="ex-cap fas fa-briefcase"></i>
          <p>PROJECT MANAGER</p>
          <p>TECHNICAL SUPPORT ENGINEER</p>
          <p>Camera World Company</p>
          <p>IRAQ - ERBIL</p>
          <p>Full Time</p>
        </div>
        <div className="ex-circle-date-tree"></div>
        <div className="ex-part-tree">
          <i className="ex-cap fas fa-briefcase"></i>
          <p>TRAINEE FULL STACK WEB DEVELOPER</p>
          <p>Code Your Future Company</p>
          <p>UK - LONDON</p>
          <p>Part Time</p>
        </div>
        <div className="ex-circle-date-four"></div>
      </div>
    </div>
  );
};

export default Experience;
