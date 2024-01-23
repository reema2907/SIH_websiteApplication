import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Complaint from './components/Complaint';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Navbar handleNavigation={handleNavigation} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
