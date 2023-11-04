import Navigation from "./Navigation";
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="header-navbar">
      <div className="navbar-header">
        <Link to="/">
          <h1>Cody Rademacher</h1>
        </Link>
      </div>
      <div className="navbar-nav-items">
        <Navigation />
      </div>
    </nav>
  );
}
