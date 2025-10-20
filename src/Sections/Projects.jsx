import React from "react";
import "../Styles/Projects.css";
import ionSpark from "../Assets/ionSpark.png"

const Projects = () => {
  const projects = [
    {
        
      title: "IonSpark",
      subtitle: "Branding publicity and UX/UI desing:",
      description:
        "IonSpark is an innovative platform focused on renewable energy management through the use of drone technology for monitoring and energy efficiency.",
      description_2:
        "The project consisted of designing the corporate website, emphasizing sustainability, technology, and the future.",
    },
    {
      title: "SEVEN",
      description:
        "SEVEN is a platform dedicated to the sale and promotion of Salvadoran art by emerging artists, aiming to connect creators with both national and international audiences.",
      subtitle2: "Results:",
        description_2:
        "SEVEN established itself as an innovative space that combines art ans technology, offering a unique experience for artists and collectors, and positioning itself as a pioneer in the virtual exhibition of emerging art in El Salvador.",
    },
    {
      title: "Cheapy Table",
      subtitle: "Branding publicity an UX/UI desing",
      description:
        "Cheapy Table is a digital marketplace that connects furniture manufacturers and buyers, focused on sustainability and accessibility.",
      description_2:
        "The design emphasized user-friendly navigation, cost transparency, and eco-conscious purchasing options.",
    },
    {
      title: "Aurely",
      
      description:
        "Aurely Jewelry is an online store for modern and exclusive jewelry, inspired by femininity and authenticity. The goal of the project was to create a digital experience that conveys sophistication and a close connection with customer.",
      subtitle2: "Deliverables",
      description_2:
        "E-comerce website desing with a color palette in white and vintage pink tones. Digital catalog with optimized photographs and jewerly mockups. Logo design, minimalist packaging, and branding materials to strengthen identity. Graphic strategy for social media (posts and stories with an aesthetic and delicate visual focus.)",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <h4 className="project-subtitle">{project.subtitle}</h4>
          <p>{project.description}</p>
          <h4 className="project-subtitle2">{project.subtitle2}</h4>
          <p>{project.description_2}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
