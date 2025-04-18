

import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-J6LV9SRFTY', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="container">
      <Navbar user={user} onLogout={handleLogout} />
      <h1><span role="img" aria-label="movie">🎬</span> My Movie App</h1>
      {/* Pass login context down to pages like LoginPage */}
      <Outlet context={{ user, onLogin: handleLogin }} />
    </div>
  );
}

export default App;