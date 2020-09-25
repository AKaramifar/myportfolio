import React from "react";
import "./Education.scss";

const Education = ({componentOffsetTop}) => {
  return (
    <div id="education" className="education" ref={(e) => (componentOffsetTop.current[4] = e)}>
     <h1>Education</h1>
    </div>
  );
};

export default Education;
