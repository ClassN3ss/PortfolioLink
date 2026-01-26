import React from "react";
import "../App.css";
import "../styles/Summary.css";

const Summary = () => {
  return (
    <div className="about">
      <h2 className="about-title">Summary</h2>
      <p className="about-text">
        Recent computer science graduate with hands-on 
        experience in web application development through internships and academic projects. 
        Skilled in Angular, backend API development, 
        and MongoDB, with experience building real-world systems, 
        including logistics management and face recognition attendance applications.
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

export default Summary;
