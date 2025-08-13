import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Power_Only from './pages/Power_Only';
import Hotshot from './pages/Hotshot';
// Dummy Components
// const Home = () => <h2>Welcome to the Home Page</h2>;
// const About = () => <h2>About Us</h2>;
// const Contact = () => <h2>Contact Us</h2>;

// App Component with Routing
const App = () => {
  return (
    <Router>
      

        <Routes>
          <Route path="/power_only" element={<Power_Only />} />
          <Route path="/hotshot" element={<Hotshot />} />
          
         
        </Routes>
      
    </Router>
  );
};

export default App;
