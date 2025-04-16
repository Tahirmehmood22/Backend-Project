// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">🎬 My Movie App</div>
      <ul className="navbar-links">
        <li><NavLink to="/" className="nav-link">Home</NavLink></li>
        <li><NavLink to="/add" className="nav-link">Add</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
