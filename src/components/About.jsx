import "../style/About.css";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import Resume from "../documents/HamoudHadi_Resume_2022.pdf";

function About() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <div className="about-section">
      <ul className="about-links">
        <li className="github">
          <a href="https://www.github.com/hadikhamoud" target="_blank">
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
      <button className="Get-in-touch-button" onClick={scrollToContact}>
        Get in touch
      </button>
      <h1 className="page-title">Hadi K. Hamoud</h1>
      <p className="about-job-title">Software Engineer</p>
      <ul className="contacts">
        <li className="contact">
          <a href="mailto:hadikhamoud@gmail.com" className="contact-title">
            hadikhamoud@gmail.com
          </a>
        </li>
        <li className="contact">
          <span className="contact-title">Doha, Qatar</span>
        </li>
        {/* <li className="contact">
          <span className="contact-title">+974 7102 3152</span>
        </li> */}
        <li className="contact">
          <a href={Resume} target="_blank" className="contact-title">
            Resume
          </a>
        </li>
      </ul>
      {/* <p className="about-paragraph">
        I am a software engineer with a passion for building software and
        learning new technologies. My main interests in the beautiful fields of
        Computer Science are Natural Language Processing, Machine Learning,
        Software Engineering, and Automated Systems. I am currently working at
        the{" "}
        <a href="http://www.dohainstitute.org/">
          Arab Center for research and policy studies
        </a>
        . I am looking for opportunities to work on projects that will help me
        grow as a software engineer and as a person.
      </p> */}
    </div>
  );
}

export default About;
