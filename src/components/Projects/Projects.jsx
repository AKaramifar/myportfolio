import React from "react";
import "./Projects.scss";

const Projects = ({ componentOffsetTop }) => {
  return (
    <div
      id="projects"
      className="projects"
      ref={(e) => (componentOffsetTop.current[6] = e)}
    >
      <h1>Projects</h1>
    </div>
  );
};

export default Projects;
