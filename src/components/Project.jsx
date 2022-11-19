import { render } from "react-dom";
import "../style/Projects.css";
import { BiLinkAlt } from "@react-icons/all-files/bi/BiLinkAlt";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";

export default function Project(props) {
  const { title, technologies, img } = props;
  return (
    <div className="project-box">
      <BiLinkAlt className="project-link-logo" />
      <FaGithub class="project-repo-logo" />
      <img className="project-image" src={img}></img>
      <h3 className="project-title">{title}</h3>
      <div className="project-technologies">
        {technologies.map((technology) => {
          return <span className="project-technology">{technology}</span>;
        })}
      </div>
    </div>
  );
}
