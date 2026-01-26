import React from "react";
import "../App.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <header className="contact-header">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Ready to collaborate on your next project?</p>
      </header>

      <div className="contact-card">
        <h3 className="contact-card-title">Get in Touch</h3>

        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-icon" aria-hidden="true">✉</span>
            <a className="contact-link" href="mailto:nattawut.thima@gmail.com">
              nattawut.thima@gmail.com
            </a>
          </li>

          <li className="contact-item">
            <span className="contact-icon" aria-hidden="true">⌂</span>
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
