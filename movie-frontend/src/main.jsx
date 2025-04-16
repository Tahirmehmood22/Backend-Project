import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './app';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="add" element={<AddMovie />} />
          <Route path="edit/:id" element={<EditMovie />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
