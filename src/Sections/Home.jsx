import React from "react";
import "../Styles/Home.css";


const Home = () => {
  const section = document.getElementById("projects");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });

  }
  return (
    <section id="home" className="home-section">

      <div className="background-layer"></div>
      <div className="home"></div>
      



    </section>)
};





export default Home;

