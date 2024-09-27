// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItineraryGenerator from './pages/ItineraryGenerator';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';

import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/itinerary-generator" element={<ItineraryGenerator />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
