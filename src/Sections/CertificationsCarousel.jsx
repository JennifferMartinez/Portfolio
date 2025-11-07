import React from "react";
import "../Styles/CertificationsCarousel.css";

const certifications = [
  {
    title: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)",
    issuer: "Certiport",
    date: "2024",
  },
  {
    title: "IT Specialist-Python",
    issuer: "Certiport",
    date: "2025",
  },
  {
    title: "TOEIC (Test of English for International Communication)",
    issuer: "",
    date: "2025",
  },
  
  
];

const CertificationsCarousel = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2>Mis Certificaciones</h2>
      <div className="certifications-carousel">
        {certifications.map((cert, index) => (
          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="certifications-card"
          >
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            <p>{cert.date}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CertificationsCarousel;
