import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1><button onClick={()=> scrollTo("home")}>Jenniffer Martinez</button></h1>
        <div className="flex gap-6 nav-links">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("aboutme")}>About me</button>
          <button onClick={() => scrollTo("skillscarousel")}>Skills</button>
          <button onClick={() => scrollTo("projects")}>Projects</button>
          <button onClick={() => scrollTo("certifications")}>Certifications</button>
          <button onClick={() => scrollTo("followme")}>Follow me</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
