import "../style/Contact.css";
import Event from "./Event";
import { ListedEvents } from "../data/data";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setSent] = useState(false);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact">
      <div className="contact-content">
        <h2 className="contact-title">
          <u>Contact</u>
        </h2>
        <form ref={form} onSubmit={handleSubmit} method="POST" target="_blank">
          <div className="text-form">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
            />
          </div>
          <div className="text-form">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
          </div>
          <div className="text-form">
            <textarea
              placeholder="Your Message"
              name="message"
              rows="5"
              cols="50"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
            />
          </div>
          <div className="form-submit">
            <button type="submit" onSubmit={handleSubmit}>
              Work with me
            </button>
          </div>
        </form>
        {isSent && (
          <div className="sent-message">
            <p>Thank you! I'll try to get back as soon as I can</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
