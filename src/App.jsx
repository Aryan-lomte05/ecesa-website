import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
