import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Pages.css";

const SorSorStore = () => {
    const navigate = useNavigate();

    const tech = [
        "PHP",
        "CSS",
        "MySQL",
    ];
    return (
        <div className="fa-page">
            <div className="fa-container">
                <button className="fa-back" onClick={() => navigate(-1)}>
                    ← Back
                </button>

                <h1 className="fa-title">Sor Sor Store</h1>

                <hr></hr>
                <br></br>

                <p className="fa-desc">
                    web-based stationery e-commerce platform that allows users to browse products, 
                    add items to a shopping cart, and complete purchases.
                    Implemented features for purchase history tracking and 
                    top-selling product display to help users review past orders and discover best-selling items.
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
                        href="https://sorstore-web.infinityfreeapp.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn primary"
                    >
                        Visit Site ↗
                    </a>
                    <a
                        href="https://github.com/ClassN3ss/ProjectWeb"
                        target="_blank"
                        rel="noreferrer"
                        className="btn primary"
                    >
                        GitHub Code
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SorSorStore;