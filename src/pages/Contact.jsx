// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form fields
    const validationErrors = {};
    if (!name) {
      validationErrors.name = "Name is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      validationErrors.email = "Invalid email address";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit the form
    // Your code to handle form submission goes here

    // Reset form fields and errors
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state value based on the input field name
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    // Check if the required field is empty
    if (value.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "This field is required",
      }));
    }
  };

  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleInputChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default Contact;
