import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { getUser, logout } from "../utils/auth.js";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = getUser();
  const navigate = useNavigate();

  return (
    <>
      <header className="header">
        <nav className="nav">

          {/* Logo */}
          <h2 className="logo">Tele-Health</h2>

          {/* Search Bar */}
          <div className="search-box">
            <input type="text" placeholder="Search..." />
          </div>

          {/* Hamburger Icon */}
          <div
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Navbar Links */}
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>

            <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/bookappoinment" onClick={() => setIsMenuOpen(false)}>Book Appointment</NavLink></li>
            <li><NavLink to="/clinicnearby" onClick={() => setIsMenuOpen(false)}>Clinic Nearby</NavLink></li>
            <li><NavLink to="/firstaid" onClick={() => setIsMenuOpen(false)}>First-aid</NavLink></li>
            <li><NavLink to="/sos" onClick={() => setIsMenuOpen(false)}>SOS</NavLink></li>

            {/* If NOT logged in → show login & signup */}
            {!user && (
              <>
                <li><NavLink to="/login" onClick={() => setIsMenuOpen(false)}>Login</NavLink></li>
                <li><NavLink to="/signup" onClick={() => setIsMenuOpen(false)}>Signup</NavLink></li>
              </>
            )}

            {/* If logged in → show profile icon + logout */}
            {user && (
              <li className="profile-container">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="Profile"
                  className="profile-icon"
                  onClick={() => navigate("/profile")}
                />

                <button
                  className="logout-btn"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </li>
            )}

          </ul>
        </nav>
      </header>
    </>
  );
}
