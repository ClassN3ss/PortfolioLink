import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pages.css";

const FaceAttendance = () => {
  const navigate = useNavigate();

  const tech = [
    "Next.js",
    "FastAPI",
    "MongoDB",
    "face_recognition",
    "JWT",
    "Docker",
    "OpenCV",
    "Python",
  ];

  return (
    <div className="fa-page">
      <div className="fa-container">
        {/* back */}
        <button className="fa-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        {/* title */}
        <h1 className="fa-title">Face Attendance</h1>

        <hr></hr>
        <br></br>

        {/* description */}
        <p className="fa-desc">
          Face recognition attendance system with multi-angle enrollment and
          verification. The system supports teacher and student dashboards,
          real-time attendance logging, and secure authentication using facial
          embeddings.
        </p>

        {/* tech stack */}
        <div className="fa-tech">
          {tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

        {/* actions */}
        <div className="fa-actions">
          <a
            href="https://project-face-attendance.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Visit Site ↗
          </a>
          <a
            href="https://github.com/ClassN3ss?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Frontend
          </a>
          <a
            href="https://github.com/ClassN3ss?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Backend
          </a>
          <a
            href="https://github.com/ClassN3ss?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Backend(Model)
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaceAttendance;
