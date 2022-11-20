import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import "../style/index.css";
import Timeline from "./Timeline.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <About />
    <Projects />
    <Timeline />
    <Contact />
  </React.StrictMode>
);
