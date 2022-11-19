import "../style/Projects.css";
import Project from "./Project";
function Projects() {
  return (
    <div class="projects">
      <Project
        title="Miettes D'art"
        technologies={["Django", "Lightsail", "PostgreSQL"]}
        img="https://res.cloudinary.com/inoroutapp/image/upload/v1667212859/background_soon_j7pwmw.jpg"
      />
      <Project
        title="DAVE"
        technologies={["Flask", "React", "Cytoscape.js", "NLP"]}
        img="https://res.cloudinary.com/inoroutapp/image/upload/v1667212859/background_soon_j7pwmw.jpg"
      />
      <Project
        title="ShopiDetect"
        technologies={["React", "Sci-kit Learn"]}
        img="https://res.cloudinary.com/inoroutapp/image/upload/v1667212859/background_soon_j7pwmw.jpg"
      />
      <Project
        title="InOrOut"
        technologies={["Kotlin", "FastAPI", "PostgreSQL"]}
        img="https://res.cloudinary.com/inoroutapp/image/upload/v1667212859/background_soon_j7pwmw.jpg"
      />
    </div>
  );
}

export default Projects;
