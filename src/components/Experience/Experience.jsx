import React from "react";
import "./Experience.scss";

const Experience = ({ componentOffsetTop }) => {
  return (
    <div
      id="experience"
      className="experience"
      ref={(e) => (componentOffsetTop.current[5] = e)}
    >
      <h1>Experience</h1>
    </div>
  );
};

export default Experience;
