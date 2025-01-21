import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Gallery from '../pages/Gallery';
import Team from '../pages/Team';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/team" element={<Team />} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
  );
};

export default AppRoutes;
