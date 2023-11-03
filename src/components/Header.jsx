import Navigation from "./Navigation";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <h1><a href="/">Cody Rademacher</a></h1>
        <Navigation />
      </div>
    </nav>
  );
}
