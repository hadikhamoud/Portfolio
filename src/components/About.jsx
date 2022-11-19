import "../style/About.css";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";

function About() {
  return (
    <div className="about-section">
      <ul className="about-links">
        <li className="github">
          <a href="https://www.github.com/hadihammoud2000" target="_blank">
            <FaGithub />
          </a>
        </li>

        <li className="linkedin">
          <a
            href="https://www.linkedin.com/in/hadi-h-aa4623114"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </li>
        <li className="mail">
          <a href="mailto:hadikhamoud@gmail.com" target="_blank">
            <MdEmail />
          </a>
        </li>
      </ul>
      <h1 className="page-title">Hadi Hamoud</h1>
      <p className="about-job-title">Software Engineer</p>
      <p className="about-paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magni
        asperiores debitis cupiditate, ad eaque ratione quo quia quasi
        obcaecati. Corporis totam mollitia officia ab repellat et non.
        Doloremque, aliquid?
      </p>
    </div>
  );
}

export default About;
