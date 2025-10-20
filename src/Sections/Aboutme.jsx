import React from "react";
import "../Styles/Aboutme.css";
import cartoon from "../Assets/cartoon.png"

const Aboutme = () => (
    <section id="aboutme" className="about-section">
        <h1>About me</h1>
        <div className="aboutme-card">

            <div className="image-container">
                <img src={cartoon} alt="Jenniffer" className="overlay-image" />
            </div>
        </div>

    </section>
);

export default Aboutme;
