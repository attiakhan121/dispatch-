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
      </Routes>
      <ScrollUp />
      <Footer />
    </Router>
  );
};

export default App;
