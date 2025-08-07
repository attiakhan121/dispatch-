import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Dummy Components
const Home = () => <h2>Welcome to the Home Page</h2>;
const About = () => <h2>About Us</h2>;
const Contact = () => <h2>Contact Us</h2>;

// App Component with Routing
const App = () => {
  return (
    <Router>
      <div>
        <nav style={{ padding: '10px', background: '#f0f0f0' }}>
          <Link to="/" style={{ margin: '10px' }}>Home</Link>
          <Link to="/about" style={{ margin: '10px' }}>About</Link>
          <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
