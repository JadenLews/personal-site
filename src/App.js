// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import PoolProject from './components/PoolProject';
import HomeAutomation from './components/HomeAutomation';
import P2PPayment from './components/P2PPayment';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/poolproject" element={<PoolProject />} />
          <Route path="/homeautomation" element={<HomeAutomation />} />
          <Route path="/P2PPayment" element={<P2PPayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;