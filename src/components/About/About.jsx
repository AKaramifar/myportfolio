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
          I am Full Stack web developer and I based in London, UK.<br />I am
          looking for full-stack developer roles and available for interviews
          any time.
          <br />
          My colleagues and my friend would describe me as someone who is
          self-motivated, hardworking, proactive, caring and dedicated person.{" "}
          <br />I have a wide range of transferable skills in software
          development and IT infrastructure.
          <br /> I am a team player capable of adapting well to new
          circumstances and conditions, and problem solver. <br />I can adapt to
          new environments quickly and love learning. <br />
          Currently seeking a role as a Full Stack web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
