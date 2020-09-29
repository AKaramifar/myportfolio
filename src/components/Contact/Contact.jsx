import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.scss";

const Contact = ({ componentOffsetTop }) => {
  const values = useRef([]);
  const sendEmail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "TID-2026009",
        event.target,
        "user_F0OnI8xhxOWQLQbXt45GX"
      )
      .then(
        (result) => {
          alert("Thanks for your message!")
        },
        (error) => {
          console.log(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <div
      id="contact"
      className="contact"
      ref={(e) => (componentOffsetTop.current[7] = e)}
    >
      <form className="contact-form" onSubmit={(e) => sendEmail(e)}>
        <div>
          <h1>CONTACT WITH ME</h1>
        </div>
        <div>
          <input
            name="Name"
            type="text"
            placeholder="NAME"
            ref={(e) => (values.current[0] = e)}
            spellCheck="false"
            autoComplete="off"
          ></input>
          <input
            name="Email"
            type="email"
            placeholder="EMAIL"
            ref={(e) => (values.current[1] = e)}
            autoComplete="off"
            spellCheck="false"
          ></input>
          <textarea
            name="Message"
            placeholder="MESSAGE"
            ref={(e) => (values.current[2] = e)}
            autoComplete="off"
            spellCheck="false"
          ></textarea>
          <input
            type="submit"
            value="SEND MESSAGE"
            ref={(e) => (values.current[3] = e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
