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
        <button className="fa-back" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="fa-title">Face Attendance</h1>

        <hr></hr>
        <br></br>

        <p className="fa-desc">
          Face recognition attendance system with multi-angle enrollment and
          verification. The system supports teacher and student dashboards,
          real-time attendance logging, and secure authentication using facial
          embeddings.
        </p>

        <div className="fa-tech">
          {tech.map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
        </div>

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
            href="https://github.com/ClassN3ss/Project_FaceAttendance"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Frontend
          </a>
          <a
            href="https://github.com/ClassN3ss/Backend_FaceAttendance"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Backend
          </a>
          <a
            href="https://github.com/ClassN3ss/Faceapi_FaceAttendance"
            target="_blank"
            rel="noreferrer"
            className="btn primary"
          >
            Model
          </a>
        </div>
      </div>
    </div>
  );
};

export default FaceAttendance;
