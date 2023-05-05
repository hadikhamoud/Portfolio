import "../style/Projects.css";
import { BiLinkAlt } from "@react-icons/all-files/bi/BiLinkAlt";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { GrDocument } from "@react-icons/all-files/gr/GrDocument";

export default function Project(props) {
  const { key, title, technologies, img, link, repo_link, other_link } = props;
  return (
    <div className="project-box">
      {link && (
        <a href={link} target="_blank">
          <BiLinkAlt className="project-link-logo" />
        </a>
      )}
      {repo_link && (
        <a href={repo_link} target="_blank">
          <FaGithub className="project-repo-logo" />
        </a>
      )}
      {other_link && (
        <a href={other_link} target="_blank">
          <GrDocument
            className="project-other-link-logo"
            style={{ color: "white" }}
          ></GrDocument>
        </a>
      )}
      <img className="project-image" src={img}></img>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-technologies">
          {technologies.map((technology) => {
            return (
              <span key={technology} className="project-technology">
                {technology}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
