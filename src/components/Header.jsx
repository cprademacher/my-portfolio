import Navigation from "./Navigation";
import "./Header.css";

export default function Header() {
  return (
    <nav className="header-navbar">
      <div className="navbar-header">
        <h1>Cody Rademacher</h1>
      </div>
      <div className="navbar-nav-items">
        <Navigation />
      </div>
    </nav>
  );
}
