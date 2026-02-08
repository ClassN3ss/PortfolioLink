import React from "react";
import "../App.css";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="about-text">
        Hello, I’m Pathanin Thima (A),
        a recent Computer Science graduate with hands-on experience in web application development through academic and project-based work. 
        I have worked on real-world systems such as a face recognition attendance platform and logistics-related applications, 
        with experience across frontend, backend APIs, and databases.
        I am particularly interested in full-stack development, mobile application development, 
        and applied AI engineering. I enjoy learning new technologies and continuously improving my skills to build practical.
      </p>
      <a
        href="/Resume_Pathanin Thima.pdf"
        className="btn primary"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default About;
