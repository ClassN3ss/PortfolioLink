import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pages.css";

const IotPlants = () => {
    const navigate = useNavigate();

    const tech = [
        "C++",
        "NodeMCU",
        "DHT11",
        "LDR",
        "Anto",
    ];
    return (
        <div className="fa-page">
            <div className="fa-container">
                <button className="fa-back" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <h1 className="fa-title">Detecting and Controlling Temperature and Humidity for Indoor Plantse</h1>

                <hr></hr>
                <br></br>

                <p className="fa-desc">
                    IoT-based system for detecting and controlling temperature and 
                    humidity for indoor shade plants using NodeMCU, DHT11, and LDR sensors.
                    Designed a real-time IoT dashboard using MQTT to help users monitor and 
                    adjust environmental conditions for indoor plants.
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
                        href="https://github.com/ClassN3ss/Project_IoT"
                        target="_blank"
                        rel="noreferrer"
                        className="btn primary"
                    >
                        Git Hub Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default IotPlants;
