import React from "react";
import "./Projects.scss";

const Projects = ({ componentOffsetTop }) => {
  return (
    <div
      id="projects"
      className="projects"
      ref={(e) => (componentOffsetTop.current[6] = e)}
    >
      <h1>PROJECTS</h1>
      <div className="project-container">
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/myportfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
          </div>
          <img src="projects/portfolio.jpg" alt="portfolio" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/Class-Planner"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-class-planner.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/classplanner.jpg" alt="classplanner" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/extra-support"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://extra-support.staging.codeyourfuture.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/extrasupport.jpg" alt="extrasupport" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/cyf-akaramifar-chat-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-chat-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/chat.jpg" alt="chat" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/countries-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-countries-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/countries.jpg" alt="countries" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/job-listings-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-jobs.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/jobsearch.jpg" alt="jobsearch" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/tfl-lines-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-tfl-lines.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/tflline.jpg" alt="tflline" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/quote-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-quote-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/qoute.jpg" alt="qoute" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/cyf-hotel-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-hotel-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/hotel.jpg" alt="hotel" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/baby-names-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-baby-names.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/babyname.jpg" alt="babyname" />
        </div>
        <div className="project-card">
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/tv-show-dom-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-tv.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/tvshow.jpg" alt="tvshow" />
        </div>
        <div
          className="project-card"
        >
          <div className="hover-link animate__animated animate__fadeIn">
            <a
              href="https://github.com/AKaramifar/karma-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-code"></i>
            </a>
            <a
              href="https://cyf-akaramifar-karma.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
          <img src="projects/karma.jpg" alt="karma" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
