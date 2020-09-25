import React from "react";
import "./Contact.scss";

const Contact = ({ componentOffsetTop }) => {
  return (
    <div
      id="contact"
      className="contact"
      ref={(e) => (componentOffsetTop.current[7] = e)}
    >
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
