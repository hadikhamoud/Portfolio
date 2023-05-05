import "../style/Projects.css";
import Project from "./Project";

import { ListedProjects } from "../data/data";
function Projects() {
  return (
    <div className="projects">
      {ListedProjects.map((project) => {
        return (
          <Project
            title={project["title"]}
            technologies={project["technologies"]}
            img={project["img"]}
            link={project["link"]}
            repo_link={project["repo_link"]}
            other_link={project["other_link"]}
          />
        );
      })}
    </div>
  );
}

export default Projects;
