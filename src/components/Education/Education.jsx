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
        <div className="circle-date-one"></div>
        <div className="part-one">
          <i className="cap fas fa-graduation-cap"></i>
          <p>COMPUTER SOFTWARE DIPLOMA</p>
          <p>Iran - Kermanshah</p>
          <p>Jaberi College</p>
        </div>
        <div className="circle-date-two"></div>
        <div className="part-two">
          <i className="cap fas fa-graduation-cap"></i>
          <p>COMPUTER SOFTWARE ENGINEERING</p>
          <p>Iran - Kermanshah</p>
          <p>Number one Univercity</p>
          <p>Iran - Rasht</p>
          <p>Gilan Univercity</p>
        </div>
        <div className="circle-date-tree"></div>
        <div className="part-tree">
          <i className="cap fas fa-graduation-cap"></i>
          <p>BASIC CODING COURSE</p>
          <p>UK - MANCHESTER</p>
          <p>CODE NATION COMPANY</p>
        </div>
        <div className="circle-date-four"></div>
        <div className="part-four">
          <i className="cap fas fa-graduation-cap"></i>
          <p>FULL STACK DEVELOPER</p>
          <p>UK - London</p>
          <p>Code Your Future</p>
        </div>
        <div className="circle-date-five"></div>
      </div>
    </div>
  );
};

export default Education;
