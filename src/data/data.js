import dave from "../assets/dave_snapshot.svg";
import miettes from "../assets/miettes_snapshot.jpg";
import shopidetect from "../assets/shopidetect_snapshot.jpg";
import inorout from "../assets/inorout_snapshot.jpg";

export const ListedEvents = [
  {
    title: "Future Plans with Dave",
    year: "Today",
    month: "Jun-",
    description:
      "After finishing my Final year project (DAVE), my team and I were fortunate to win the Murex Software engineering award for best collaborative project. We are currently on track to publishing a paper on DAVE, and in the process of integrating the tool into the Epic EHR system. starting at the American University Of Beirut Medical Center(AUBMC), and then hopefully expanding to the EPIC medical extensions store.",
  },

  {
    title: "Bachelor's Degree in Computer Engineering",
    year: "2022",
    month: "Aug",
    description:
      "I graduated with a Bachelor's degree in Computer and Communications Engineering from the American University of Beirut (AUB). I had taken courses related to Machine Learning, Computer Vision, Natural Language Processing, Mobile and Web Development, Software Engineering, Mobile and Computer Networking.  I am currently looking for a full-time position as a Software Engineer. I am also looking for opportunities to work on open-source projects.",
  },

  {
    title: "Cloud Consulting Internship",
    year: "2021",
    month: "Jul-Oct",
    description:
      "I partook in an internship at KPMG lower Gulf limited, in the enterprise solutions and cloud department. I participated in the implementation of a customer relationship management system (CRM) and in a selection and assessment project, both for large UAE government entities. At KPMG LG, I learned the translation of business processes to software programs with higher stakes and much more people involved. I also further understood how quality of service is adopted when operating in a multinational corporation.",
  },
  {
    title: "Fintech Engineering Internship",
    year: "2020",
    month: "Aug-Nov",
    description:
      "I joined Areeba SAL, a financial technology third party processing company, as an engineering intern. There, I designed, and implemented a solution for a mobile app push notification service for Bank Audi across Oracle Database, UNIX dedicated server, and the Audi Banking App. I had the chance to experience first-hand engaging in end-to-end software development, from ideation to deployment, in a professional background with actual responsibilities and abidance to best practices. ",
  },
];

export const ListedProjects = [
  {
    title: "Miettes D'art",
    technologies: ["Django", "Lightsail", "PostgreSQL"],
    img: miettes,
    link: "https://www.miettesdart.com",
    repo_link: "https://www.github.com/hadihammoud2000/miettes-D-art",
  },
  {
    title: "DAVE",
    technologies: ["Flask", "React", "Cytoscape.js", "NLP"],
    img: dave,
    link: "https://www.davemr.com",
    repo_link: "https://www.github.com/hadihammoud2000/davemr",
  },
  {
    title: "ShopiDetect",
    technologies: ["React", "Sci-kit Learn"],
    img: shopidetect,
    link: "https://shopidetectui.netlify.app/",
    repo_link: "https://www.github.com/hadihammoud2000/shopidetectv2",
  },
  {
    title: "InOrOut App",
    technologies: ["Kotlin", "FastAPI", "PostgreSQL"],
    img: inorout,
    repo_link: "https://www.github.com/hadihammoud2000/inorout",
  },
];
