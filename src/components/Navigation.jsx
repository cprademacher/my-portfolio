// eslint-disable-next-line react/prop-types
export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handlePageChange("about-me")}
            className={
              currentPage === "about-me" ? "nav-link active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("portfolio")}
            className={
              currentPage === "portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange("contact")}
            className={
              currentPage === "contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>
      </ul>
    </>
  );
}
