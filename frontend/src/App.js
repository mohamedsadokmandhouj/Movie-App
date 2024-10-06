import React from 'react';
import NavBar from './components/NavBar'; 
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs'; 
import Movies from './pages/Movies'; 
import NotFound from './pages/NotFound'; // Add a NotFound page

function App() {
  return (
    <div>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} /> 
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Handle unknown routes */}
      </Routes>
    </div>
  );
}

export default App;


