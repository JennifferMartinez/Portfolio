import Navbar from "./Componentes/Navbar";
import Home from "./Sections/Home"
import Aboutme from "./Sections/Aboutme";
import Projects from "./Sections/Projects";
import SkillsCarousel from "./Sections/SkillsCarousel"
import Followme from "./Sections/Followme";
import CertificationsCarousel from "./Sections/CertificationsCarousel";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Home/>
      <Aboutme />
      <SkillsCarousel/>
      <Projects />
      <CertificationsCarousel/>
      <Followme/>

      
      
    </div>
  );
}

export default App;
