import React from "react";
import "../Styles/Followme.css";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Followme = () => {
  return (
    <footer className="followme" section id="followme">
      <h3>Follow me</h3>
      <div className="social-icons">
        <a href="https://github.com/JennifferMartinez" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/jenniffer-martinez-27253a366?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.facebook.com/share/1B9ynTvf7R/" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://gmail.com/jenniffermartinezcastro04@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail/>
        </a>
        <a href="https://www.instagram.com/jennda_m?igsh=MXgwOHJpOXRyaDQweQ==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Jenniffer Martinez. Copyright.</p>
    </footer>
  );
};

export default Followme;
