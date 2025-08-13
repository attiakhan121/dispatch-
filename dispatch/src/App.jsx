import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Contact from './pages/ContactUs';
import FactoringPage from "./pages/factoring/index";
import { PricesPage } from "./pages/prices";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollUp from "./components/ScrollUp";
import Power_Only from './pages/Power_Only';
import Hotshot from './pages/Hotshot'; 
import Privacy_Notice from './pages/Privacy_Notice';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/factoring-services" element={<FactoringPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/power-only" element={<Power_Only />} /> 
        <Route path="/hotshot" element={<Hotshot />} /> 
        <Route path="/privacy-notice" element={<Privacy_Notice/>} />
      </Routes>
      <ScrollUp />
      <Footer />
    </Router>
  );
};

export default App;
