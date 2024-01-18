import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header-navbar">
      <div className="navbar-header">
        <h1>
          <Link to="/about-me">Cody Rademacher</Link>
        </h1>
      </div>
      <div className="navbar-nav-items">
        <Navigation />
      </div>
    </nav>
  );
}
