import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer animate__animated animate__fadeInUp">
      <div><p>BUILT WITH REACT, HTML5, SCSS &nbsp;&nbsp;&nbsp;&nbsp; SEPTEMBER - 2020 </p></div>
      <div className="links-container">
        <a
          href="https://www.linkedin.com/in/afshin-karamifar-b13733180"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/AKaramifar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://twitter.com/AfshinKaramifar?s=09"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1PThC5N9VjGj2NJ9BvSSEOTxBUa9D2-bY/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-file-alt"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
