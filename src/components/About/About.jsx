import React from "react";
import "./About.scss";

const About = ({ componentOffsetTop }) => {
  return (
    <div
      id="about"
      className="about-container animate__animated animate__fadeIn"
      ref={(e) => (componentOffsetTop.current[1] = e)}
    >
      <div className="about-left-side">
        <p>HERE I AM</p>
      </div>
      <div className="about-right-side">
        <p>
          I am Junior Full Stack web developer and I living in London, UK.
          <br />
          I am available for speaking engagements, interviews, and freelance
          projects
          <br />
          <br />
          My colleagues and my friend would describe me as someone who is
          self-motivated, hardworking, proactive, caring and dedicated person.
          <br />
          I have a wide range of transferable skills in software
          development and IT infrastructure.
          <br /> Strong team member capable of adapting well to new
          circumstances and conditions, I consider myself to be positive and determined with strong
          problem-solving skills.
          <br />I am comfortable with all aspects of learning and can adapt to
          new environments quickly.
          <br />
          Currently seeking a role as a Junior Full Stack web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
