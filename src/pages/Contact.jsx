// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Contact = () => {
  const contactInfo = {
    name: "Cody Rademacher",
    email: "cprademacher36@gmail.com",
    phone: "512-461-2129",
    github: "https://github.com/cprademacher",
    linkedIn: "https://www.linkedin.com/in/cody-rademacher-5157187b/",
  };

  return (
    <>
      <div className="contact-page">
        <h1>Contact Information</h1>
        <div className="contact-info">
          <p>
            <strong>Name:</strong> {contactInfo.name}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </p>
          <p>
            <strong>Phone:</strong> {contactInfo.phone}
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.github}
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contactInfo.linkedIn}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
