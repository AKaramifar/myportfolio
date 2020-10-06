import React from "react";
import "./Education.scss";

const Education = ({ componentOffsetTop }) => {
  return (
    <div
      id="education"
      className="education"
      ref={(e) => (componentOffsetTop.current[4] = e)}
    >
      <h1>EDUCATION</h1>
      <div className="education-container">
        <div className="circle-date-two"></div>
        <div className="part-two">
          <i className="cap fas fa-graduation-cap"></i>
          <p>COMPUTER SOFTWARE ENGINEERING</p>
          <p>Sardar Jangal Rasht Univercity</p>
          <p>Iran - Rasht</p>
        </div>
        <div className="circle-date-four"></div>
        <div className="part-four">
          <i className="cap fas fa-graduation-cap"></i>
          <p>FULL STACK WEB COURSE</p>
          <p>Code Your Future Company</p>
          <p>UK - London</p>
        </div>
        <div className="circle-date-five"></div>
      </div>
    </div>
  );
};

export default Education;
