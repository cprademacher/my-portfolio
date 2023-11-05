import { useState } from "react";
import { Link } from "react-router-dom";

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
          onClick={(e) => handlePageChange("about-me", e)}
          className={activeItem === "about-me" ? "nav-link active" : "nav-link"}
        >
          <Link to="/about-me" className={activeItem === "about-me" ? "chosen" : ""}>About Me</Link>
        </li>

        <li
          onClick={(e) => handlePageChange("portfolio", e)}
          className={
            activeItem === "portfolio" ? "nav-link active" : "nav-link"
          }
        >
          <Link to="/portfolio" className={activeItem === "portfolio" ? "chosen" : ""}>Portfolio</Link>
        </li>

        <li
          onClick={(e) => handlePageChange("contact", e)}
          className={activeItem === "contact" ? "nav-link active" : "nav-link"}
        >
          <Link to="/contact" className={activeItem === "contact" ? "chosen" : ""}>Contact</Link>
        </li>

        <li
          onClick={(e) => handlePageChange("resume", e)}
          className={activeItem === "resume" ? "nav-link active" : "nav-link"}
        >
          <Link to="/resume" className={activeItem === "resume" ? "chosen" : ""}>Resume</Link>
        </li>
      </ul>
    </>
  );
}

// Install the Link capabilities
