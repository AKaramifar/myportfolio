import React, { useRef } from "react";
import Intro from "../Intro/Intro.jsx";
import About from "../About/About.jsx";
import Skills from "../Skills/Skills.jsx";
import Education from "../Education/Education.jsx";
import Experience from "../Experience/Experience.jsx";
import Projects from "../Projects/Projects.jsx";
import Contact from "../Contact/Contact.jsx";
import "./Body.scss";

const Body = ({ selectNav, selectedNav }) => {
  const componentOffsetTop = useRef([]);
  const on_Scroll = (e) => {
    componentOffsetTop.current.map((El) =>
      e.target.scrollTop >= El.offsetTop - 30 &&
      e.target.scrollTop <= El.offsetTop + 30 &&
      selectedNav.toLowerCase() !== El.id.toLowerCase().replace("-", " ")
        ? selectNav(El.id.toUpperCase().replace("-", " "))
        : {}
    );
  };
  return (
    <div id="body" className="body" onScroll={(e) => on_Scroll(e)}>
      <Intro selectNav={selectNav} componentOffsetTop={componentOffsetTop} />
      <About componentOffsetTop={componentOffsetTop} />
      <Skills componentOffsetTop={componentOffsetTop} />
      <Education componentOffsetTop={componentOffsetTop} />
      <Experience componentOffsetTop={componentOffsetTop} />
      <Projects componentOffsetTop={componentOffsetTop} />
      <Contact componentOffsetTop={componentOffsetTop} />
    </div>
  );
};

export default Body;
