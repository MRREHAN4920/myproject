
import { useState } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  NavLink,
  useLocation
} from "react-router-dom";

import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import AboutUs from "./AboutUs";
import "./App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: "Home", path: "/home", icon: "⌂" },
    { name: "Veg Menu", path: "/veg", icon: "🥗" },
    { name: "Non-Veg Menu", path: "/nonveg", icon: "🍗" },
    { name: "About Us", path: "/aboutus", icon: "ℹ" }
  ];

  return (
    <header className="main-navbar">
      <div className="navbar-inner">

        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="brand-icon">🍽️</div>
          <div className="brand-text">
            <h2>KPRIT <span>CANTEEN</span></h2>
            <small>Fresh • Tasty • Delicious</small>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `nav-link ${isActive || (link.path === "/home" && location.pathname === "/") ? "active" : ""}`
              }
            >
              <span className="nav-icon">{link.icon}</span>
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/veg"
            className="nav-order-btn"
            onClick={closeMenu}
          >
            Order Food <span>→</span>
          </Link>
        </nav>

      </div>
    </header>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonveg" element={<NonVeg />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <footer className="main-footer">
        <div className="footer-brand">
          <span>🍽️</span>
          <h3>KPRIT CANTEEN</h3>
        </div>
        <p>Good Food • Great Taste • Happy Moments</p>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/veg">Veg</Link>
          <Link to="/nonveg">Non-Veg</Link>
          <Link to="/aboutus">About Us</Link>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} KPRIT Canteen. All Rights Reserved.
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
