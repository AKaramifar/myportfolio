import React from "react";
import Intro from "../Intro/Intro.jsx";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills.jsx";
import Education from "../Education/Education.jsx";
import Experience from "../Experience/Experience.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import "./Body.scss";

const Body = () => {
  return (
    <div id="body" className="body">
      <Intro />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
