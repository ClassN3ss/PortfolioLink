import React from "react";
import "../App.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h2 className="contact-title">Contact Me</h2>
      </header>

      <div className="contact-card">

        <ul className="contact-list">
          <li className="contact-item">
            <p className="contact-link">
              nattawut.thima@gmail.com
            </p>
          </li>

          <li className="contact-item">
            <a className="contact-link" href="https://github.com/ClassN3ss" target="_blank" rel="noreferrer">
              github.com/ClassN3ss
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Contact;
