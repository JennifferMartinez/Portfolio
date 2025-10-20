import React from "react";
import "../Styles/Followme.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Followme = () => {
  return (
    <footer className="followme" section id="followme">
      <h3>Follow me</h3>
      <div className="social-icons">
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://gmail.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <SiGmail/>
        </a>
        <a href="https://www.instragram.com/jennda_m?igsh=MXgwOHJpOXRyaDQweQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jenniffer. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Followme;
