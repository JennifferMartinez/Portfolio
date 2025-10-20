import React from "react";
import "../Styles/SkillsCarousel.css";

const skills = [
    { name: "Creative", color: "#2b5a56" },
    { name: "Resilient", color: "#2b5a56" },
    { name: "Team work", color: "#2b5a56" },
    { name: "Responsability", color: "#2b5a56" },
    { name: "Time management", color: "#2b5a56" },
    { name: "Leadership", color: "#2b5a56" },
    { name: "English", color: "#2b5a56" },
    { name: "Adaptability", color: "#2b5a56" },
    { name: "Problem solving", color: "#2b5a56" },
    { name: "Branding", color: "#2b5a56" },
    { name: "Integrity", color: "#2b5a56" },
  ];
const SkillsCarousel = () => {
  return (
    <section id="skillscarousel" className="carousel-section">
        <h2>My skills</h2>
      <div className="skills-carousel">
        
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skills-carousel-item"
            style={{ backgroundColor: skill.color }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsCarousel;
