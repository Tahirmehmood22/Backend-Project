
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useOutletContext,
  Navigate,
} from 'react-router-dom';

import App from './app';
import Home from './pages/home';
import AddMovie from './pages/addMovie';
import EditMovie from './pages/editMovie';
import NotFound from './pages/notFound';
import LoginPage from './pages/LoginPage';
import './style.css';


function LoginPageWrapper() {
  const { onLogin } = useOutletContext();
  return <LoginPage onLogin={onLogin} />;
}

function ProtectedRoute({ children }) {
  const { user } = useOutletContext();
  return user ? children : <Navigate to="/login" replace />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />

          {/* ✅ Protected AddMovie route */}
          <Route
            path="add"
            element={
              <ProtectedRoute>
                <AddMovie />
              </ProtectedRoute>
            }
          />

          {/* ✅ Protected EditMovie route */}
          <Route
            path="edit/:id"
            element={
              <ProtectedRoute>
                <EditMovie />
              </ProtectedRoute>
            }
          />

          {/* ✅ Public login page */}
          <Route path="login" element={<LoginPageWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);