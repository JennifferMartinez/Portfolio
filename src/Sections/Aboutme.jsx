import React from "react";
import "../Styles/Aboutme.css";
import cartoon from "../Assets/cartoon.png"
import Me from "../Assets/Me.png"

const Aboutme = () => (
    <section id="aboutme" className="about-section">
        <h1>About me</h1>
        <div className="aboutme-card">
            <img src={Me} alt= "about me text" className="text-me"/>

            <div className="image-container">
                <img src={cartoon} alt="Jenniffer" className="overlay-image" />
            </div>
        </div>

    </section>
);

export default Aboutme;
