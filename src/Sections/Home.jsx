import React from "react";
import "../Styles/Home.css";
import myImage from "../Assets/myImage.png";

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
            </div>
            
          
          </div>
        </section>)
  };

 



export default Home;

