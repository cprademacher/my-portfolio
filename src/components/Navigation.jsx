import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navigation() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const path = location.pathname; // Get the current path
    // Update activeItem based on the path
    if (path.includes("/about-me")) {
      setActiveItem("about-me");
    } else if (path.includes("/portfolio")) {
      setActiveItem("portfolio");
    } else if (path.includes("/contact")) {
      setActiveItem("contact");
    } else if (path.includes("/resume")) {
      setActiveItem("resume");
    }
  }, [location]); // Re-run the effect when the location changes

  const handlePageChange = (item, e) => {
    e.preventDefault();
    setActiveItem(item);
  };

  return (
    <>
      <ul className="nav nav-tabs">
        <li
          onClick={(e) => handlePageChange("portfolio", e)}
          className="navigation-item"
        >
          <Link
            to="/portfolio"
            className={activeItem === "portfolio" ? "chosen" : ""}
          >
            Portfolio
          </Link>
        </li>

        <li
          onClick={(e) => handlePageChange("about-me", e)}
          className="navigation-item"
        >
          <Link
            to="/about-me"
            className={activeItem === "about-me" ? "chosen" : ""}
          >
            About Me
          </Link>
        </li>

        <li
          onClick={(e) => handlePageChange("contact", e)}
          className="navigation-item"
        >
          <Link
            to="/contact"
            className={activeItem === "contact" ? "chosen" : ""}
          >
            Contact
          </Link>
        </li>

        <li
          onClick={(e) => handlePageChange("resume", e)}
          className="navigation-item"
        >
          <Link
            to="/resume"
            className={activeItem === "resume" ? "chosen" : ""}
          >
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
}
