import React from "react";
import "../App.css";
import "../styles/Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
    const projects = [
        {
            title: "Face Attendance",
            desc: "Face recognition attendance system with multi-angle enrollment and verification. Teacher/student dashboards and attendance logging.",
            href: "/projects/face-attendance",
            meta: "Next.js • FastAPI • MongoDB • face_recognition",
        },
        {
            title: "Sor Sor Store",
            desc: "Web-based stationery e-commerce platform that allows users to browse products, add items to a shopping cart, and complete purchases.",
            href: "/projects/sor-sor-store",
            meta: "PHP • MySQL • CSS",
        },
        {
            title: "Detecting and Controlling Temperature and Humidity for Indoor Plants",
            desc: "IoT-based system for monitoring and controlling temperature and humidity for indoor shade plants using NodeMCU, DHT11, and LDR sensors.",
            href: "/projects/iot-plants",
            meta: "C++ • NodeMCU • DHT11 • LDR • Anto",
        },
        
    ];
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-list">
                {projects.map((p, i) => (
                    <Link to={p.href} className="project-card" key={i}>
                    <div className="project-left">
                        <h3 className="project-title">{p.title}</h3>
                        <p className="project-desc">{p.desc}</p>
                        <span className="project-meta">{p.meta}</span>
                    </div>
                    <div className="project-arrow" aria-hidden="true">
                        →
                    </div>
                    </Link>
                ))}
            </div>
            <div className="project-a">
                <a
                    href="https://github.com/ClassN3ss?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                    className="btn primary"
                >
                    See More ↗
                </a>
            </div>
        </div>
        
    );
};

export default Projects;
