import "../style/About.css";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { useState, useEffect } from "react";
import Resume from "../documents/HamoudHadi_Resume_2022.pdf";

const countryAPI = import.meta.env.VITE_COUNTRY_API_KEY;
function About() {
  const [isLebanon, setLebanon] = useState(false);

  useEffect(() => {
    fetch(`https://api.ipdata.co?api-key=${countryAPI}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.country_name === "Lebanon") {
          setLebanon(true);
        }
      });
  }, []);

  const scrollToContact = () => {
    document
      .getElementById("contact")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  };

  function displayCountry() {
    if (isLebanon) {
      return (
        <ul className="contacts">
          <li className="contact">
            <a href="mailto:hadikhamoud@gmail.com" className="contact-title">
              hadikhamoud@gmail.com
            </a>
          </li>

          <li className="contact">
            <span className="contact-title">Beirut, Lebanon</span>
          </li>
          <li className="contact">
            <span className="contact-title">+961 70-0033229</span>
          </li>
          <li className="contact">
            <a href={Resume} target="_blank" className="contact-title">
              Resume
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="contacts">
          <li className="contact">
            <a href="mailto:hadikhamoud@gmail.com" className="contact-title">
              hadikhamoud@gmail.com
            </a>
          </li>
          <li className="contact">
            <span className="contact-title">Dubai, UAE</span>
          </li>
          <li className="contact">
            <span className="contact-title">+971 50-6151628</span>
          </li>
          <li className="contact">
            <a href="#" className="contact-title">
              Resume
            </a>
          </li>
        </ul>
      );
    }
  }

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
      <button className="Get-in-touch-button" onClick={scrollToContact}>
        Get in touch
      </button>
      <h1 className="page-title">Hadi K. Hamoud</h1>
      <p className="about-job-title">Software Engineer</p>
      {displayCountry()}
      <p className="about-paragraph">
        I am a software engineer with a passion for building software and
        learning new technologies. My main interests in the beautiful fields of
        Computer Science are Natural Language Processing, Machine Learning,
        Software Engineering, and Automated Systems. I am currently looking for
        opportunities to work on projects that will help me grow as a software
        engineer and as a person.
      </p>
    </div>
  );
}

export default About;
