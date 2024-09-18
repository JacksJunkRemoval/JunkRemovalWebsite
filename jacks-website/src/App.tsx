import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing'
import Header from './components/Header/Header.tsx'
import OurWorkPage from './components/WorkSample/OurWorkPage';
import FAQPage from './components/FAQ/FAQPage';
import ContactPage from './components/Contact/ContactPage';
import Footer from './components/Footer/Footer.tsx'

function App() {

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <Router>
      <div>
        <Header isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
        
        <Routes>
          <Route path="/" element={<LandingPage isNavbarOpen={isNavbarOpen} />} />
          <Route path="/ourwork" element={<OurWorkPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
