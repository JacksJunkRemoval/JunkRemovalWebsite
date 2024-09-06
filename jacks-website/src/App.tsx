import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/Landing'
import Header from './components/Header/Header.tsx'
import OurWorkPage from './components/WorkSample/OurWorkPage';
import FAQPage from './components/FAQ/FAQPage';
import ContactPage from './components/Contact/ContactPage';

function App() {

  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/ourwork" element={<OurWorkPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
