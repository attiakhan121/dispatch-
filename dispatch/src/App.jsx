import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/ContactUs';
import StepDeck from './pages/StepDeck';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/flat-bed-step-deck" element={<StepDeck />}/>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
