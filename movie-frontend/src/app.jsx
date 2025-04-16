import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <span role="img" aria-label="movie">🎬</span> My Movie App
        </div>
        <div className="nav-links">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
          <Link to="/add" className={location.pathname === '/add' ? 'active' : ''}>Add</Link>
        </div>
      </nav>
      <h1><span role="img" aria-label="movie">🎬</span> My Movie App</h1>
      <Outlet />
    </div>
  );
}

export default App;
