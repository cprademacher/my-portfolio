import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Navigation() {
  const [activeItem, setActiveItem] = useState("about-me");

  const handlePageChange = (item, e) => {
    e.preventDefault();
    setActiveItem(item);
  };

  return (
    <>
      <ul className="nav nav-tabs">
        <li
          className={activeItem === "about-me" ? "nav-link active" : "nav-link"}
        >
          <a href="about-me" onClick={(e) => handlePageChange("about-me", e)}>
            About Me
          </a>
        </li>
        <li
          className={
            activeItem === "portfolio" ? "nav-link active" : "nav-link"
          }
        >
          <a href="portfolio" onClick={(e) => handlePageChange("portfolio", e)}>
            Portfolio
          </a>
        </li>
        <li
          className={activeItem === "contact" ? "nav-link active" : "nav-link"}
        >
          <a href="contact" onClick={(e) => handlePageChange("contact", e)}>
            Contact
          </a>
        </li>
        <li
          className={activeItem === "resume" ? "nav-link active" : "nav-link"}
        >
          <a href="resume" onClick={(e) => handlePageChange("resume", e)}>
            Resume
          </a>
        </li>
      </ul>
    </>
  );
}


// Install the Link capabilities