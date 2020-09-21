import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div
      id="about"
      className="about-container animate__animated animate__fadeIn"
    >
      <div className="about-left-side">
        <p>HERE I AM</p>
      </div>
      <div className="about-right-side">
        <p>
          I am Full Stack web developer and I living in London, UK.
          <br />
          I'm available for speaking engagements, interviews, and freelance
          projects
          <br />
          <br />I would describe myself as someone who is honest, caring,
          intelligent, hardworking, proactive, dedicated, self-motivated person
          with a wide range of transferable skills in software development and
          IT infrastructure.
          <br /> Strong team member capable of adapting well to new
          circumstances and conditions. I consider myself to be positive and
          determined with strong problem-solving skills.I am comfortable with
          all aspects of learning and can adapt to new environments quickly.
          Currently seeking a role as a Junior Full Stack web developer.
        </p>
      </div>
    </div>
  );
};

export default About;
