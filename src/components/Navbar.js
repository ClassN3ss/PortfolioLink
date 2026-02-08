import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import "../styles/Navbar.css";

const Navbar = () => {
  const location = useLocation();
  if (location.pathname !== "/") return null;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const nav = document.querySelector(".navbar");
    const navH = nav ? nav.offsetHeight : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - (navH - 40);

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <h2 onClick={() => scrollTo("home")} className="logo">Pathanin Thima Portfolio</h2>
      <ul>
        <li onClick={() => scrollTo("home")}>Home</li>
        <li onClick={() => scrollTo("about")}>About Me</li>
        <li onClick={() => scrollTo("projects")}>Projects</li>
        <li onClick={() => scrollTo("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
