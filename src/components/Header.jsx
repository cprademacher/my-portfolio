import Navigation from "./Navigation";
import './Header.css';

export default function Header() {
  return (
    <nav className="header-navbar">
      <div className="navbar-header">
        <h1><a href="/">Cody Rademacher</a></h1>
      </div>
      <div className="navbar-nav-items">
        <Navigation />
      </div>
    </nav>
  );
}
