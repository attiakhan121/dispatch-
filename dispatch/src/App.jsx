import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/ContactUs';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About_page from './pages/about';
import Refeer_page from './pages/Refeer';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={< About_page />} />
        <Route path="/refeer" element={< Refeer_page />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
