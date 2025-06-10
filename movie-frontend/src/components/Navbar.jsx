import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🎬 My Movie App</div>
      <ul className="navbar-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>

        {/* ✅ Show Add link only if user is logged in */}
        {user && (
          <li><NavLink to="/add" className="nav-link">Add</NavLink></li>
        )}

        {!user ? (
          <li><NavLink to="/login" className="nav-link">Login</NavLink></li>
        ) : (
          <>
            <li className="nav-link">Welcome, {user}</li>
            <li>
              <button
                className="nav-link navbar-button"  // ✅ Use navbar-button for proper styling
                onClick={onLogout}
              >
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;