import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/afshin-karamifar-b13733180"  target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="https://github.com/AKaramifar"  target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://twitter.com/AfshinKaramifar?s=09"  target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://github.com/AKaramifar/myportfolio/blob/master/README.md"  target="_blank" rel="noopener noreferrer">
        <i class="fas fa-file-alt"></i>
      </a>
    </div>
  );
};

export default Footer;
