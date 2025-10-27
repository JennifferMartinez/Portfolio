import React from "react";
import "../Styles/Home.css";
import myImage from "../Assets/myImage.png";
import GraDesi from "../Assets/GraDesi.png";
import phicgner from "../Assets/phicgner.png";


const Home = () => {
  const section = document.getElementById("projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

  }
  return (
    <section id="home" className="home-section">

      <div className="background-layer"></div>
      <div className="portafolioWeb"></div>


      <div className="home-content">
        <div className="image-container">
          <img src={myImage} alt="Jenniffer" className="overlay-image" />
            <img src="../Assets/GraDesi.png" alt="imagen de la izquierda" className="img-left" />
            <img src="../Assets/phicgner.png" alt="imagen de la derecha" className="img-right" />
    

        </div>


      </div>
    </section>)
};





export default Home;

